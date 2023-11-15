import { PLAYER_COLORS } from '@/consts';
import { Chess } from 'chess.js';
import { type ReactNode, createContext, useMemo, useState } from 'react';

type GameValuesType = {
  game: Chess;
  playerColor: string;
  handleChangePlayerColor: (color: string) => void;
};

const gameContext = createContext<GameValuesType>({} as GameValuesType);

const { Provider } = gameContext;

const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useMemo(() => new Chess(), []);

  const [playerColor, setPlayerColor] = useState<string>(PLAYER_COLORS.WHITE);

  const handleChangePlayerColor = (color: string) => {
    setPlayerColor(color);
  };

  const gameValues: GameValuesType = {
    game,
    playerColor,
    handleChangePlayerColor,
  };

  return <Provider value={gameValues}>{children}</Provider>;
};

export { gameContext, GameProvider };
