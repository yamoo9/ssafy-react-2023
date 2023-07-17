export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER1 = '⚫️';
export const PLAYER2 = '🟨';
export const WINNER_COLOR = '#fefecf';

const getCondition = (conditonString) => {
  return conditonString.toString().split('').map(Number);
};

const WINNER_CONDTIONS = [
  getCondition('012'),
  getCondition('345'),
  getCondition('678'),
  getCondition('036'),
  getCondition('147'),
  getCondition('258'),
  getCondition('048'),
  getCondition('246'),
];

export const checkWinner = (squares) => {
  // 승자 확인 로직
  for (const [x, y, z] of WINNER_CONDTIONS) {
    const player = squares[x];
    if (player && player === squares[y] && player === squares[z]) {
      return {
        player,
        condition: [x, y, z],
      };
    }
  }

  return null;
};

export const getStatusMessage = ({ nextPlayer, winner, isDraw } = {}) => {
  if (winner) {
    return `위너! ${winner.player}`;
  } else if (isDraw) {
    return `무승부... 😳`;
  } else {
    return `플레이어 ${nextPlayer}`;
  }
};
