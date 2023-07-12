import './globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Game } from './Game';

const rootNode = document.getElementById('root');

createRoot(rootNode).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
