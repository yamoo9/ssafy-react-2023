import { func, node, oneOf } from 'prop-types';
import s from '../styles/ScrollButton.module.css';

function ScrollButton({ mode = 'down' }) {
  const isDown = mode === 'down';
  const buttonLabel = `스크롤 ${isDown ? '다운' : '업'}`;

  return (
    <button
      type="button"
      className={isDown ? s.scrollDown : s.scrollUp}
      // className={s.scrollDown}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

ScrollButton.propTypes = {
  mode: oneOf(['down', 'up']),
};

export default ScrollButton;

ScrollButton.Group = function ButtonGroup({ onScroll, children }) {
  return (
    <div role="group" className={s.ScrollButtonGroup} onClick={onScroll}>
      {children}
    </div>
  );
};

ScrollButton.Group.propTypes = {
  onScroll: func,
  children: node,
};
