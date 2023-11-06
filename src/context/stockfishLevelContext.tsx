import { STOCKFISH_LEVELS } from '@/consts';
import { type ReactNode, createContext, useState } from 'react';

const stockfishLevelContext = createContext<stockfishLevelValuesType>({} as stockfishLevelValuesType);

const { Provider } = stockfishLevelContext;

type stockfishLevelValuesType = {
  stockfishLevel: number;
  handleChangeStockfishLevel: (newLevel: number) => void;
};

const StockfishLevelProvider = ({ children }: { children: ReactNode }) => {
  const [stockfishLevel, setStockfishLevel] = useState<number>(STOCKFISH_LEVELS.EASY);

  const handleChangeStockfishLevel = (newLevel: number) => {
    setStockfishLevel(newLevel);
  };

  const stockfishLevelValues: stockfishLevelValuesType = {
    stockfishLevel,
    handleChangeStockfishLevel,
  };

  return <Provider value={stockfishLevelValues}>{children}</Provider>;
};

export { stockfishLevelContext, StockfishLevelProvider };
