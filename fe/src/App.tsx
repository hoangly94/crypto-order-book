import { Provider } from "react-redux";
import "./App.css";
import { Router } from "./Router";
import { ThemeProvider } from "./contexts/Theme";
import { store } from "./data/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
