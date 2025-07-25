import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider clientId='70dfb53ac92ea79476d664f0f519f0c0' activeChain='sepolia'>
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
 