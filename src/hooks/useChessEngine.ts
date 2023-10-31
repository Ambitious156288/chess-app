import { STOCKFISH_LEVELS } from '@/consts';
import Engine from '@/engine';
import { useEffect, useMemo, useState } from 'react';

const useChessEngine = () => {
  const [stockfishLevel, setStockfishLevel] = useState<number>(STOCKFISH_LEVELS.EASY);

  useEffect(() => {
    const stockfish = new Worker('./stockfish.js');
    const DEPTH = 8;
    const FEN_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    stockfish.postMessage('uci');
    stockfish.postMessage(`position fen ${FEN_POSITION}`);
    stockfish.postMessage(`go depth ${DEPTH}`);
  }, []);

  const engine = useMemo(() => new Engine(), []);

  const handleChangeStockfishLevel = (newLevel: number) => {
    setStockfishLevel(newLevel);
  };

  return { engine, stockfishLevel, handleChangeStockfishLevel };
};

export default useChessEngine;
