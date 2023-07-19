export const STORAGE_KEY = 'tic-tac-toe';

export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER = {
  circle: '⚫️',
  rectangle: '🟨',
};

export const WINNER_COLOR = '#fff8d7';

const WINNER_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares) => {
  for (const [x, y, z] of WINNER_CONDITION) {
    const player = squares[x];
    if (player && player === squares[y] && player === squares[z]) {
      return {
        player,
        pattern: [x, y, z],
      };
    }
  }
  return null;
};

export const getStatusMessage = ({ winner, isDraw, nextPlayer } = {}) => {
  if (winner) {
    return `위너! ${winner.player}`;
  } else if (isDraw) {
    return `비겼어요... 😳`;
  } else {
    return `플레이어 ${nextPlayer}`;
  }
};

export const getNextPlayer = (gameIndex) =>
  gameIndex % 2 === 0 ? PLAYER.circle : PLAYER.rectangle;
