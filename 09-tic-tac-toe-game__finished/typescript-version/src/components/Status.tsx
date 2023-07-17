import classes from '@/styles/Game.module.css';

interface Props {
  children: React.ReactNode;
}

function Status({ children }: Props): JSX.Element {
  return <h2 className={classes.Status}>{children}</h2>;
}

export default Status;
