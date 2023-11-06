import { Chess } from 'chess.js';
import { type ReactNode, createContext, useMemo } from 'react';

const gameContext = createContext<Chess>({} as Chess);

const { Provider } = gameContext;

const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useMemo(() => new Chess(), []);

  return <Provider value={game}>{children}</Provider>;
};

export { gameContext, GameProvider };
