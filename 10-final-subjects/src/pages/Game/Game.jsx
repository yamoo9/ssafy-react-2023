import S from './Game.module.css';
import { Board, History } from './components';
import { GameProvider } from './contexts/GameContext';

export default function Game() {
  return (
    <GameProvider>
      <div className={`${S.Game} mt-20`}>
        <Board />
        <History />
      </div>
    </GameProvider>
  );
}
