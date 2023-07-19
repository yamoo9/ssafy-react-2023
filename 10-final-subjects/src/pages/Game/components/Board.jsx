import { arrayOf, func, oneOf } from 'prop-types';
import S from '../Game.module.css';
import {
  PLAYER,
  WINNER_COLOR,
  checkWinner,
  getStatusMessage,
} from '../constants';
import Square from './Square';
import Status from './Status';
import { useGameState } from '../contexts/GameContext';

function Board(/* { squares, nextPlayer, onPlay } */) {
  const {
    currentSquares: squares,
    nextPlayer,
    playGame: onPlay,
  } = useGameState();

  const winner = checkWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  const handlePlay = (index) => () => {
    if (winner) {
      return globalThis.alert('GAME OVER');
    }
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    onPlay(nextSquares);
  };

  const statusMessage = getStatusMessage({
    nextPlayer,
    isDraw,
    winner,
  });

  return (
    <div className={S.Board}>
      <Status message={statusMessage} />
      <Square.List>
        {squares.map((square, index) => {
          let winnerStyle = null;

          if (winner && 'pattern' in winner) {
            const [x, y, z] = winner.pattern;
            if (index === x || index === y || index === z) {
              winnerStyle = { background: WINNER_COLOR };
            }
          }

          return (
            <Square key={index} style={winnerStyle} onClick={handlePlay(index)}>
              {square}
            </Square>
          );
        })}
      </Square.List>
    </div>
  );
}

const PlayerType = oneOf([PLAYER.circle, PLAYER.rectangle, null]);
export const SquareType = arrayOf(PlayerType);

Board.propTypes = {
  squares: SquareType,
  nextPlayer: PlayerType,
  onPlay: func,
};

export default Board;
