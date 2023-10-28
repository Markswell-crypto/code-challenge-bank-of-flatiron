# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Bank Transaction Application
The Bank Transaction Application is a React-based web app that allows you to manage and view your recent bank transactions. This application provides features for listing transactions, adding new transactions, and searching for specific transactions.The app fetches transaction data from a local server and displays it in a list.

## Features
1. View a table of all your recent transactions.
2. Add new transactions using a form.
3. Filter transactions by typing into the search bar.
4. Optionally, sort transactions alphabetically by category or description.
5. Delete transactions from the list.

## Project Setup
Before running the application, ensure that you have Node.js and npm installed on your system.

1. Clone this repository to your local machine:
       git clone git@github.com:shekhs-murega/Bank-of-flatiron.git
2. Navigate to the server directory and run npm install to install the server dependencies.
3. Run npm start to start the server. The server will run on port 3000 by default.
4. Navigate back to the root directory and run npm install to install the app dependencies.
5. Run npm start to start the app.

## Data Setup
This application uses a local JSON server to manage transaction data. Before running the app, set up your local server:

- Create a db.json file in the project directory.
- Populate the db.json file with your transaction data. The data should follow   the structure outlined in the application's data model.
- Start the JSON server by running:
    json-server --watch db.json 
- Verify your server is running by visiting the transaction endpoint in your browser:

## Usage
To view your transactions, open the application in your browser.Use the search bar to filter transactions by description.Add new transactions using the form.
Optionally, sort or delete transactions.

### Code Overview
[App.jsx]: This is the main component that renders the search bar, transaction list, and transaction form.
[SearchTransaction.jsx]: This is a simple component that renders the search bar.
[TransactionList.jsx]: This component renders the list of transactions based on the query and handles the logic for filtering and sorting the transactions.
[Transaction.jsx]: This is a simple component that renders a single transaction.
[AccountInformation.jsx]: One of the main file components that defines the variables for transactions, query, form fields and their initial value.
[db.json]: JSON database file for storing transaction data.
Dependancies
React.
Semantic-ui-css (for styling)
JSON server (for local data management)
Contributors
If you'd like to contribute to this project, feel free to submit a pull request. Before submitting a pull request, please make sure your code is well-documented and adheres to the existing code style.

License
This project is open-source and available under the MIT License