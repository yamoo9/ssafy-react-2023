import { PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { func, object, oneOf } from 'prop-types';

function Square({ children, style, onClick }) {
  return (
    <button
      type="button"
      className={classes.Square}
      style={style}
      disabled={children}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const PlayerType = oneOf([null, PLAYER1, PLAYER2]);

Square.propTypes = {
  // children: node,
  children: PlayerType,
  style: object,
  onClick: func,
};

export default Square;
