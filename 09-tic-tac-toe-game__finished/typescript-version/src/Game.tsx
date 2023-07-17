import { Board, History } from '@/components';
import useGame from '@/hooks/useGame';
import classes from '@/styles/Game.module.css';
import { PLAYER_TYPE } from './constants';

export default function Game() {
  const { boardRecords, board, gameIndex, nextPlayer, playGame, timeTravel } = useGame();

  return (
    <div className={classes.Game}>
      <Board
        squares={board}
        playGame={playGame}
        nextPlayer={nextPlayer as PLAYER_TYPE}
      />
      <History
        gameIndex={gameIndex}
        boardRecords={boardRecords}
        onTimeTravel={timeTravel}
      />
    </div>
  );
}
