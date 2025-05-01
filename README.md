# Wagmi Workshop

This project was created during the Wagmi Workshop. It demonstrates how to interact with Ethereum smart contracts using the Wagmi library, RainbowKit, and React.

## Features

- Connect to Ethereum wallets using RainbowKit.
- Read and write data to a smart contract.
- React-based UI for interacting with the blockchain.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/wagmi-workshop.git
   cd wagmi-workshop
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the **Connect Wallet** button to connect your Ethereum wallet.
- Use the input field and buttons to interact with the smart contract:
  - **Get Mood**: Fetch the current mood stored in the smart contract.
  - **Set Mood**: Update the mood in the smart contract.

## Project Structure

- `src/main.jsx`: Entry point of the application.
- `src/App.jsx`: Main component containing the UI and logic for interacting with the smart contract.
- `src/config.js`: Configuration for Wagmi, including chain and transport settings.
- `src/contracts/abi.js`: ABI of the smart contract (not included in this repository).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Wagmi](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [React](https://reactjs.org/)

If you find this project helpful, please give it a ⭐!