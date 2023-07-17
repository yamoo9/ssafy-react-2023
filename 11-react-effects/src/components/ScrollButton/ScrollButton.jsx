import { func, node, oneOf } from 'prop-types';
import styles from './ScrollButton.module.css';

function ScrollButton({ mode = 'down' }) {
  const isDown = mode === 'down';
  const buttonLabel = `스크롤 ${isDown ? '다운' : '업'}`;

  return (
    <button
      type="button"
      className={isDown ? styles.scrollDown : styles.scrollUp}
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
  const scrollMove = ({ currentTarget, target }) => {
    const { top } = currentTarget.getBoundingClientRect();
    const appElement = document.getElementById('root')?.firstElementChild;

    if (target.matches('[title="스크롤 다운"]')) {
      appElement.scroll({
        top,
        behavior: 'smooth',
      });
    }
    if (target.matches('[title="스크롤 업"]')) {
      appElement.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (e) => {
    scrollMove(e);
    onScroll?.();
  };

  return (
    <div role="group" className={styles.group} onClick={handleClick}>
      {children}
    </div>
  );
};

ScrollButton.Group.propTypes = {
  onScroll: func,
  children: node,
};
