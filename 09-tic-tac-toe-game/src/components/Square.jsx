import classes from '@/styles/Game.module.css';
import { object } from 'prop-types';
import { func, node } from 'prop-types';

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

Square.propTypes = {
  children: node,
  style: object,
  onClick: func,
};

export default Square;
