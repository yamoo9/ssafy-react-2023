import { PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { oneOf } from 'prop-types';

function Status({ nextPlayer }) {
  return <h2 className={classes.Status}>플레이어 {nextPlayer}</h2>;
}

Status.propTypes = {
  nextPlayer: oneOf([PLAYER1, PLAYER2]),
};

export default Status;
