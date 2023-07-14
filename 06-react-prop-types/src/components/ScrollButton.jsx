import PropTypes from 'prop-types';
import '../styles/ScrollButton.css';

function ScrollButton({ mode = 'down', label = '스크롤 다운' }) {
  const isDown = mode === 'down';
  const buttonLabel = label ?? `스크롤 ${isDown ? '다운' : '업'}`;

  return (
    <button
      type="button"
      className={isDown ? 'scrollDown' : 'scrollUp'}
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
  mode: PropTypes.string,
  label: PropTypes.string,
};

ScrollButton.Group = function ScrollButtonGroup({ onScroll, children }) {
  return (
    <div role="group" className="ScrollButtonGroup" onClick={onScroll}>
      {children}
    </div>
  );
};

ScrollButton.Group.propTypes = {
  onScroll: PropTypes.func,
  children: PropTypes.node, // React.ReactNode
};

export default ScrollButton;
