import { checkWinner, getStatusMessage } from '@/constants';
import classes from '@/styles/Game.module.css';
import { func } from 'prop-types';
import { PlayerType } from './Square';
import SquareList, { SquaresType } from './SquareList';
import Status from './Status';

function Board({ squares, nextPlayer, onPlay }) {
  const winner = checkWinner(squares); // null | { player, condtion }
  const isDraw = !winner && squares.every(Boolean);
  const statusMessage = getStatusMessage({
    winner,
    isDraw,
    nextPlayer,
  });

  const handlePlay = (index) => () => {
    if (winner) return globalThis.alert('GAME OVER');
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    onPlay(nextSquares);
  };

  return (
    <div className={classes.Board}>
      <Status message={statusMessage} />
      <SquareList squares={squares} winner={winner} handlePlay={handlePlay} />
    </div>
  );
}

Board.propTypes = {
  squares: SquaresType,
  nextPlayer: PlayerType,
  onPlay: func,
};

export default Board;
