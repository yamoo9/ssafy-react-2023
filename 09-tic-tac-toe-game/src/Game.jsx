import { Board, History } from '@/components';
import classes from '@/styles/Game.module.css';

export default function Game() {
  return (
    <div className={classes.Game}>
      <Board />
      <History />
    </div>
  );
}
