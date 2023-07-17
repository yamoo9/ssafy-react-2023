import { PLAYER1, PLAYER2, WINNER_COLOR } from '@/constants';
import classes from '@/styles/Game.module.css';
import { arrayOf, func, oneOf } from 'prop-types';
import Square from './Square';
import { shape } from 'prop-types';
import { number } from 'prop-types';

function SquareList({
  squares,
  winner /* { player, condtion } */,
  handlePlay,
}) {
  return (
    <div className={classes.SquareList}>
      {squares.map((square, index) => {
        let winnerStyles = null;

        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerStyles = {
              backgroundColor: WINNER_COLOR,
            };
          }
        }

        return (
          <Square key={index} style={winnerStyles} onClick={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export const SquaresType = arrayOf(oneOf([null, PLAYER1, PLAYER2]));

export const WinnerType = shape({
  player: oneOf([PLAYER1, PLAYER2]),
  condition: arrayOf(number),
});

SquareList.propTypes = {
  squares: SquaresType,
  winner: WinnerType,
  handlePlay: func,
};

export default SquareList;
