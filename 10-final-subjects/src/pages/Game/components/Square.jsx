import { any, node } from 'prop-types';
import S from '../Game.module.css';
import { memo } from 'react';

/* Square ------------------------------------------------------------------- */

const Square = memo(function Square({ children, ...restProps }) {
  return (
    <button
      type="button"
      className={S.Square}
      disabled={children}
      {...restProps}
    >
      {children}
    </button>
  );
});

Square.propTypes = {
  children: node,
  restProps: any,
};

export default Square;

/* SquareList --------------------------------------------------------------- */

Square.List = function SquareList({ children }) {
  return <div className={S.Squares}>{children}</div>;
};

Square.List.propTypes = {
  children: node,
};
