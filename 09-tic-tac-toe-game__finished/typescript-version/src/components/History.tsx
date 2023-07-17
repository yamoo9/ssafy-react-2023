import { PLAYER_TYPE } from '@/constants';
import classes from '@/styles/Game.module.css';

interface Props {
  boardRecords: PLAYER_TYPE[][];
  onTimeTravel: (index: number) => () => void;
  gameIndex: number;
}

function History({
  boardRecords,
  gameIndex,
  onTimeTravel,
}: Props): JSX.Element {
  return (
    <div className={classes.History}>
      <ol>
        {boardRecords.map((_, index) => {
          const isDisabled = gameIndex === index;
          const disabledStyles = {
            opacity: isDisabled ? 0.5 : 1,
          };

          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisabled}
                style={disabledStyles}
                onClick={onTimeTravel(index)}
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

export default History;
