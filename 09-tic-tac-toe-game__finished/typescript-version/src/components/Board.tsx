import { PLAYER_TYPE, checkWinner, getStatusMessage } from '@/constants';
import classes from '@/styles/Game.module.css';
import SquareList from './SquareList';
import Status from './Status';

interface Props {
  squares: PLAYER_TYPE[];
  nextPlayer: PLAYER_TYPE;
  playGame: (nextSquares: PLAYER_TYPE[]) => void;
}

function Board({ squares, playGame, nextPlayer }: Props): JSX.Element {
  const winner = checkWinner(squares);
  const isDraw = !winner && squares?.every(Boolean);

  const handlePlay = (index: number) => () => {
    if (winner) return globalThis.alert('GAME OVER!');
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    playGame(nextSquares);
  };

  const statusMessage = getStatusMessage({
    nextPlayer,
    isDraw,
    winner,
  });

  return (
    <div className={classes.Board}>
      <Status>{statusMessage}</Status>
      <SquareList squares={squares} winner={winner} onPlay={handlePlay} />
    </div>
  );
}

export default Board;
