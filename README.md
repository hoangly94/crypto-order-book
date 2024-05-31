## Getting Started

To get started with this project, follow these steps:

1. Install dependencies by running `npm install` or `yarn install`.
2. Start the development server by running `npm dev` or `yarn dev`.
3. Open your browser and visit `http://localhost:3000` to view the project.

# Tech stacks

- ReactJS
- ViteJS
- Ant Design
- Styled components
- Redux toolkit
- Socket.io

## Project Structure

- **public**: Contains static assets that may be moved to remote asset in the furture.
- **src**: Contains the main source code of the project.
  - **assets**: Contains images, fonts, or any other static assets that are used for bundling into the application.
  - **data**: 
    - **api**: Contains api endpoints with Axios request.
    - **services**: Contains business logic before http requests were called.
    - **store**: Contains logic for redux toolkit.
  - **ui**: 
    - **shared**: Contains reusable React components.
    - **containers**: Contains page containers: UnAuthenticatedContainer, AuthenticatedContainer.
    - **features**: Contains the module features of the application.
    - **layouts**: Contains the layouts which are used in page components.
  - **contexts**: Contains global React contexts.
  - **models**: Contains interfaces.
  - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..
  - **App.tsx**: Entry point for the React application.
  - **App.css**: Contains global css.
  - **Router.tsx**: Contains application routing.
  - **main.tsx**: Entry point for the Typescript bundling.
- **.env.sample**: Remove .sample to use as app environment variables.
- **index.html**: Serves as the entry point for web application.

## Theme Setup

The project utilizes Ant Design for its UI components. The theme configuration can be found in **src/contexts/Theme.tsx**.

## Other Dev Information

- **Development Server**: To start the development server, run `npm start`.
- **Building**: To build the project for production, run `npm run build`.
- **Linting**: The project uses ESLint for linting. Run `npm run lint`.
- **Format**: The project maintains consistent code formatting using Prettier. Run `npm run pretty:fix`.
