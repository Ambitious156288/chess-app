import { STOCKFISH_LEVELS } from '@/consts';
import { type ReactNode, createContext, useState } from 'react';

type StockfishLevelValuesType = {
  stockfishLevel: number;
  handleChangeStockfishLevel: (newLevel: number) => void;
};

const stockfishLevelContext = createContext<StockfishLevelValuesType>({} as StockfishLevelValuesType);

const { Provider } = stockfishLevelContext;

const StockfishLevelProvider = ({ children }: { children: ReactNode }) => {
  const [stockfishLevel, setStockfishLevel] = useState<number>(STOCKFISH_LEVELS.EASY);

  const handleChangeStockfishLevel = (newLevel: number) => {
    setStockfishLevel(newLevel);
  };

  const stockfishLevelValues: StockfishLevelValuesType = {
    stockfishLevel,
    handleChangeStockfishLevel,
  };

  return <Provider value={stockfishLevelValues}>{children}</Provider>;
};

export { stockfishLevelContext, StockfishLevelProvider };
