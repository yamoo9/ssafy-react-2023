import S from './Game.module.css';
import { Board, History } from './components';
import { GameProvider } from './contexts/GameContext';

export default function Game() {
  return (
    <GameProvider>
      <div className={S.Game}>
        <Board />
        <History />
      </div>
    </GameProvider>
  );
}
