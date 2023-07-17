import classes from '@/styles/Game.module.css';
import { arrayOf, func, number } from 'prop-types';
import { SquaresType } from './SquareList';

function History({ squares, onTimeTraverl, gameIndex }) {
  return (
    <div className={classes.History}>
      <ol>
        {squares.map((_, index) => {
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisabled}
                style={{
                  opacity: isDisabled ? 0.5 : 1,
                }}
                onClick={onTimeTraverl(index)}
              >
                {index === 0 ? '게임 시작!' : `게임 #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

History.propTypes = {
  squares: arrayOf(SquaresType),
  gameIndex: number,
  onTimeTraverl: func,
};

export default History;
