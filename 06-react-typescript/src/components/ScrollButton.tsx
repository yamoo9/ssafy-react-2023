import { MouseEventHandler } from 'react';
import '../styles/ScrollButton.css';

interface ScrollButtonProps {
  mode?: 'down' | 'up';
  label?: string;
}

function ScrollButton({
  mode = 'down',
  label = '스크롤 다운',
}: ScrollButtonProps): JSX.Element {
  const isDown: boolean = mode === 'down';
  const buttonLabel: string = label ?? `스크롤 ${isDown ? '다운' : '업'}`;

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

/* -------------------------------------------------------------------------- */

interface ScrollButtonGroupProps {
  onScroll: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

ScrollButton.Group = function ScrollButtonGroup({
  onScroll,
  children,
}: ScrollButtonGroupProps): JSX.Element {
  return (
    <div role="group" className="ScrollButtonGroup" onClick={onScroll}>
      {children}
    </div>
  );
};

export default ScrollButton;
