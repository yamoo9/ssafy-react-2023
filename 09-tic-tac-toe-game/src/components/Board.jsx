import classes from '@/styles/Game.module.css';
import SquareList from './SquareList';
import Status from './Status';
import { useState } from 'react';
import { INITIAL_SQUARES, PLAYER1, PLAYER2 } from '@/constants';

function Board() {
  // 컴포넌트 상태: component states
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [gameIndex, setGameIndex] = useState(0);

  // 파생된 상태: derived states from component states
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  const handlePlay = (index) => () => {
    const nextSquares = [...squares]; // [null, ... x 9]
    nextSquares[index] = nextPlayer; // [null, null, ⚫️, null, ...]
    setSquares(nextSquares);
    setGameIndex(gameIndex + 1); // 0 → 1 → 2
  };

  return (
    <div className={classes.Board}>
      <Status nextPlayer={nextPlayer} />
      <SquareList squares={squares} handlePlay={handlePlay} />
    </div>
  );
}

export default Board;
