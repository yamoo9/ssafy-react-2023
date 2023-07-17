import { INITIAL_SQUARES, PLAYER1, PLAYER2, PLAYER_TYPE } from '@/constants';
import { useState } from 'react';

function useGame() {
  const [boardRecords, setBoardRecords] = useState<PLAYER_TYPE[][]>([
    INITIAL_SQUARES,
  ]);

  const [gameIndex, setGameIndex] = useState<number>(0);

  const board = boardRecords[gameIndex];

  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  const playGame = (nextSquares: PLAYER_TYPE[]) => {
    const nextGameIndex = gameIndex + 1;
    setBoardRecords([...boardRecords.slice(0, nextGameIndex), nextSquares]);
    setGameIndex(nextGameIndex);
  };

  const timeTravel = (index: number) => () => {
    setGameIndex(index);
  };

  return {
    boardRecords,
    gameIndex,
    board,
    nextPlayer,
    playGame,
    timeTravel,
  };
}

export default useGame;
