import {
  INITIAL_SQUARES,
  PLAYER1,
  PLAYER2,
  checkWinner,
  getStatusMessage,
} from '@/constants';
import classes from '@/styles/Game.module.css';
import { useState } from 'react';
import SquareList from './SquareList';
import Status from './Status';

function Board() {
  // 컴포넌트 상태: component states
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [gameIndex, setGameIndex] = useState(0);

  // 파생된 상태: derived states from component states
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;
  const winner = checkWinner(squares); // null | { player, condtion }
  const isDraw = !winner && squares.every(Boolean);
  const statusMessage = getStatusMessage({
    winner,
    isDraw,
    nextPlayer,
  });

  const handlePlay = (index) => () => {
    if (winner) return globalThis.alert('GAME OVER');
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    setSquares(nextSquares);
    setGameIndex(gameIndex + 1);
  };

  return (
    <div className={classes.Board}>
      <Status message={statusMessage} />
      <SquareList squares={squares} winner={winner} handlePlay={handlePlay} />
    </div>
  );
}

export default Board;
