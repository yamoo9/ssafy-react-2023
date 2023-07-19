import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const rootNode = document.getElementById('root');

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
