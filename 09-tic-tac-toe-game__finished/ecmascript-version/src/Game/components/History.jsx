import { arrayOf, func, number } from 'prop-types';
import { SquareType } from './Board';

function History({ squares, gameIndex, onTravel }) {
  return (
    <div className="History">
      <ol>
        {squares.map((square, index) => {
          const isDisabled = index === gameIndex;
          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisabled}
                style={!isDisabled ? null : { opacity: 0.4 }}
                onClick={onTravel.bind(null, index)}
              >
                {index === 0 ? '게임 시작!' : `게임 #${index} 이동`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

History.propTypes = {
  squares: arrayOf(SquareType).isRequired,
  gameIndex: number.isRequired,
  onTravel: func.isRequired,
};

export default History;
