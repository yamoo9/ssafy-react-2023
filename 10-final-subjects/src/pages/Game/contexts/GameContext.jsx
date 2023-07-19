import { node } from 'prop-types';
import { createContext, useContext } from 'react';
import useGame from '../hooks/useGame';

// GameContext 생성 → 이름 내보내기
const GameContext = createContext();

// Game Provider (Wrapper Component)
export function GameProvider({ children }) {
  const gameStates = useGame();

  return (
    <GameContext.Provider value={gameStates}>{children}</GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: node.isRequired,
};

// Custom Hook
export function useGameState() {
  // return Context Value
  const gameState = useContext(GameContext);

  if (!gameState) {
    throw new Error(
      'useGameState 훅은 GameContext 내부에서만 사용 가능합니다.'
    );
  }

  return gameState;
}
