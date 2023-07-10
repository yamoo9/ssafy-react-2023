import './ScrollButton.css';

function ScrollButton({ mode = 'down' }) {
  const isDown = mode === 'down';
  const buttonLabel = `스크롤 ${isDown ? '다운' : '업'}`;

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

ScrollButton.Group = function ButtonGroup({ onScroll, children }) {
  return (
    <div role="group" className="ScrollButtonGroup" onClick={onScroll}>
      {children}
    </div>
  );
};

export default ScrollButton;
