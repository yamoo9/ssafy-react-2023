import { any, node } from 'prop-types';

/* Square ------------------------------------------------------------------- */

function Square({ children, ...restProps }) {
  return (
    <button type="button" className="Square" disabled={children} {...restProps}>
      {children}
    </button>
  );
}

Square.propTypes = {
  children: node,
  restProps: any,
};

export default Square;

/* SquareList --------------------------------------------------------------- */

Square.List = function SquareList({ children }) {
  return <div className="Squares">{children}</div>;
};

Square.List.propTypes = {
  children: node,
};
