import classes from '@/styles/Game.module.css';
import { func, node } from 'prop-types';

function Square({ children, onClick }) {
  return (
    <button type="button" className={classes.Square} onClick={onClick}>
      {children}
    </button>
  );
}

Square.propTypes = {
  children: node,
  onClick: func,
};

export default Square;
