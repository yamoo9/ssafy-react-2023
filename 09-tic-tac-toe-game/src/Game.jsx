import { Board, History } from '@/components';
import classes from '@/styles/Game.module.css';
import { useState } from 'react';
import { INITIAL_SQUARES, PLAYER1, PLAYER2 } from './constants';

export default function Game() {
  // 컴포넌트 상태: component states
  const [squares, setSquares] = useState([INITIAL_SQUARES]); // [[record_0]]
  const [gameIndex, setGameIndex] = useState(0);

  // 파생된 상태: derived states from component states
  const currentSquare = squares[gameIndex];
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  const playGame = (nextSquares) => {
    setSquares([...squares.slice(0, gameIndex + 1), nextSquares]); // [[record_0], [record_1], ...]
    setGameIndex(gameIndex + 1);
  };

  const timeTravel = (index) => () => {
    setGameIndex(index);
  };

  return (
    <div className={classes.Game}>
      <Board
        squares={currentSquare}
        nextPlayer={nextPlayer}
        onPlay={playGame}
      />
      <History
        gameIndex={gameIndex}
        squares={squares}
        onTimeTraverl={timeTravel}
      />
    </div>
  );
}
