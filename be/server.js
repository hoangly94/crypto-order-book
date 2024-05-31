const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const WebSocket = require('ws');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

const selectedSymbols = {}
const bidConditions = []
const askConditions = []

let intervalId = 0


io.on('connection', (socket) => {

    socket.on('symbol', async ({ symbol }) => {
        if (selectedSymbols[symbol]) {
            return
        }
        const priceChangePercent = await getTicker4hr(symbol)
        io.emit('symbol/24hr', JSON.stringify({
            priceChangePercent,
        }))

        clearInterval(intervalId)
        intervalId = setInterval(async () => {
            const priceChangePercent = await getTicker4hr(symbol)
            io.emit('symbol/24hr', JSON.stringify({
                priceChangePercent,
            }))
        }, 10000)

        selectedSymbols[symbol] = true
        const binanceWebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`);

        binanceWebSocket.on('open', () => {
            console.log(`WebSocket connection established for Symbol: ${symbol}`);
        });

        binanceWebSocket.on('message', (rsp) => {
            const data = JSON.parse(rsp)

            io.emit(`orderBook/${symbol}`, JSON.stringify(data));
            if (Math.floor(Math.random() * 5) + 1 <= 2) {
                const isBid = Math.random() > 0.5
                io.emit('alert', JSON.stringify({
                    type: isBid ? 'bid' : 'ask',
                    price: isBid ? data.b?.[0]?.[0] : data.a?.[0]?.[0],
                }))
            }
        });

        binanceWebSocket.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    });

    socket.on('conditions', ({ conditions }) => {
        askConditions = []
        bidConditions = []
        conditions.forEach(condition => {
            if (condition.type === 'ask') {
                askConditions.push(condition.price)
            }
            else {
                bidConditions.push(condition.price)
            }
        });
    });
})



let symbols = []

const getSymbolList = async () => {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
        symbols = response.data?.symbols?.map(d => ([
            d.baseAsset,
            d.quoteAsset,
        ]));
    } catch (error) {
        console.error('Failed to fetch symbol list:', error);
        return [];
    }
};

getSymbolList()

const getTicker4hr = async (symbol) => {
    const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`);
    const marketData = response.data
    const lastPrice = parseFloat(marketData.lastPrice);
    const prevClosePrice = parseFloat(marketData.prevClosePrice);
    return ((lastPrice - prevClosePrice) / prevClosePrice) * 100;
}

app.get('/symbols', (req, res) => {
    res.send(symbols);
});

app.get('/ticker/24hr', async (req, res) => {
    const { symbol } = req.query;
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`);
        const marketData = response.data
        res.send(marketData);
    } catch (error) {
        res.send(error);
    }

});

app.get('/ticker/24hr-change', async (req, res) => {
    const { symbol } = req.query;
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`);
        const marketData = response.data
        const lastPrice = parseFloat(marketData.lastPrice);
        const prevClosePrice = parseFloat(marketData.prevClosePrice);
        const priceChangePercent = ((lastPrice - prevClosePrice) / prevClosePrice) * 100;
        res.send({ percent: priceChangePercent });
    } catch (error) {
        res.send(error);
    }
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
