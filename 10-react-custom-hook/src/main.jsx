import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/global.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
