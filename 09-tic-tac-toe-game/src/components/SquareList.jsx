import { PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { arrayOf, func } from 'prop-types';
import Square from './Square';

function SquareList({ squares, handlePlay }) {
  return (
    <div className={classes.SquareList}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onClick={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

SquareList.propTypes = {
  squares: arrayOf([null, PLAYER1, PLAYER2]),
  handlePlay: func,
};

export default SquareList;
