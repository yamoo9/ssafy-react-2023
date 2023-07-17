import { Board, History } from '@/components';
import classes from '@/styles/Game.module.css';
import useGame from '@/hooks/useGame';

export default function Game() {
  const {
    squares,
    gameIndex,
    currentSquare,
    timeTravel,
    nextPlayer,
    playGame,
  } = useGame();

  return (
    <div className={classes.Game}>
      <Board
        squares={currentSquare}
        nextPlayer={nextPlayer}
        onPlay={playGame}
      />
      <History
        gameIndex={gameIndex}
        squares={squares}
        onTimeTraverl={timeTravel}
      />
    </div>
  );
}
