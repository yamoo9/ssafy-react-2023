export const PLAYER1 = '⚫️';
export const PLAYER2 = '🟨';
export const WINNER_COLOR = '#ffffd1';

export type PLAYER_TYPE = typeof PLAYER1 | typeof PLAYER2 | null;

export type WINNER_TYPE = null | {
  player: PLAYER_TYPE;
  results: number[];
};

export const INITIAL_SQUARES = Array(9).fill(null);

const convertNumberArray = (s: string): number[] => s.split('').map(Number);

const WINNER_CONDTIONS = [
  convertNumberArray('012'),
  convertNumberArray('345'),
  convertNumberArray('678'),
  convertNumberArray('036'),
  convertNumberArray('147'),
  convertNumberArray('258'),
  convertNumberArray('048'),
  convertNumberArray('246'),
];

export const checkWinner = (squares: PLAYER_TYPE[]) => {
  if (squares) {
    for (const [x, y, z] of WINNER_CONDTIONS) {
      const player = squares[x];
      if (player && player === squares[y] && player === squares[z]) {
        return {
          player,
          results: [x, y, z],
        };
      }
    }
  } else {
    return null;
  }
};

export const getStatusMessage = ({
  nextPlayer,
  isDraw,
  winner,
}: {
  nextPlayer: PLAYER_TYPE;
  isDraw: boolean;
  winner?: WINNER_TYPE;
}) => {
  if (winner) {
    return `위너! ${winner.player as string}`;
  } else if (isDraw) {
    return `무승부... 😳`;
  } else {
    return `플레이어 ${nextPlayer as string}`;
  }
};
