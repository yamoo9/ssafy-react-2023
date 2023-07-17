import classes from '@/styles/Game.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

function Square({
  className = '',
  children,
  ...restProps
}: Props): JSX.Element {
  const classNames = `${classes.Square} ${className}`.trim();
  const isDisabled = !children ? false : true;

  return (
    <button
      type="button"
      className={classNames}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Square;
