import './Game.css';
import { Board, History } from './components';
import useGame from './hooks/useGame';

export default function Game() {
  const {
    squares,
    currentSquares,
    nextPlayer,
    playGame,
    gameIndex,
    travelGame,
  } = useGame();

  return (
    <div className="Game">
      <Board
        squares={currentSquares}
        nextPlayer={nextPlayer}
        onPlay={playGame}
      />
      <History squares={squares} gameIndex={gameIndex} onTravel={travelGame} />
    </div>
  );
}
