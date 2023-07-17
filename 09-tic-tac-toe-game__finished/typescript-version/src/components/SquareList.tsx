import { PLAYER_TYPE, WINNER_COLOR, WINNER_TYPE } from '@/constants';
import classes from '@/styles/Game.module.css';
import Square from './Square';

interface Props {
  squares: PLAYER_TYPE[];
  winner?: WINNER_TYPE;
  onPlay: (index: number) => () => void;
}

function SquareList({ squares, winner, onPlay }: Props): JSX.Element {
  return (
    <div className={classes.Squares}>
      {squares?.map((square, index) => {
        let winnerStyles = null;

        if (winner) {
          const [x, y, z] = winner.results;
          if (index === x || index === y || index === z) {
            winnerStyles = { backgroundColor: WINNER_COLOR };
          }
        }

        return (
          <Square key={index} style={winnerStyles} onClick={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default SquareList;
