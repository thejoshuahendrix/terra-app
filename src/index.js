import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Play from './pages/play';
import Guide from './pages/guide';
import Leaderboard from './pages/leaderboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';

// We import Wallet Provider and a util function
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

const TWITTER_HANDLE = 'hendrixjoshua';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

// Fetch available connection options
getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* Wrap the app in a context provider for the wallet */}
      <WalletProvider {...chainOptions}>
        <div className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/play" element={<Play />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </BrowserRouter>

          <div className="footer-container">
            <img
              alt="Twitter Logo"
              className="twitter-logo"
              src="/twitter-logo.svg"
            />
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`Made by @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
      </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
