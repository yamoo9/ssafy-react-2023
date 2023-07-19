import { useState } from 'react';
import { INITIAL_SQUARES, STORAGE_KEY, getNextPlayer } from '../constants';
import useStorage from './useStorage';

function useGame(isSave = false) {
  const { read, save, remove } = useStorage(STORAGE_KEY);

  if (!isSave) remove();

  const { gameBoards, gameIndex: initialGameIndex } = read() ?? {};
  const INTIIAL_GAME_BOARD = gameBoards ? gameBoards : [INITIAL_SQUARES];
  const INITIAL_GAME_INDEX = initialGameIndex ?? 0;

  const [squares, setSquares] = useState(
    isSave ? INTIIAL_GAME_BOARD : [INITIAL_SQUARES]
  );

  const [gameIndex, setGameIndex] = useState(isSave ? INITIAL_GAME_INDEX : 0);

  const currentSquares = squares[gameIndex];

  const nextPlayer = getNextPlayer(gameIndex);

  const playGame = (nextSquares) => {
    const gameBoards = [...squares.slice(0, gameIndex + 1), nextSquares];
    const nextGameIndex = gameIndex + 1;

    setSquares(gameBoards);
    setGameIndex(nextGameIndex);
    saveGame(nextGameIndex, gameBoards);
  };

  const travelGame = (index) => {
    setGameIndex(index);
    saveGame(index, [...squares.slice(0, index + 1)]);
  };

  const saveGame = (nextGameIndex, gameBoards) => {
    if (isSave) {
      save({
        gameIndex: nextGameIndex,
        gameBoards,
      });
    }
  };

  return {
    squares,
    gameIndex,
    currentSquares,
    nextPlayer,
    playGame,
    travelGame,
  };
}

export default useGame;
