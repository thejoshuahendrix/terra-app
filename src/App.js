import "./App.css";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import Menu from "./components/Menu";
import WalletAddress from './components/WalletAddress';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  // Let's take a look at what the starting states are!
  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);
  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    }
    // Check if wallet is connect
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>ORC War ⚔</h1>
          <p>Only you can save us from orcs</p>
        </div>
      </header>
      <WalletAddress />
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src="https://media.giphy.com/media/8v3WIOCM9Qy08/giphy.gif"
            alt="orc gif"
          />
        </div>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <div className="game-menu-container">
          <Menu />
        </div>
      )}
      {renderConnectButton()}
    </main>
  );
}

export default App;
