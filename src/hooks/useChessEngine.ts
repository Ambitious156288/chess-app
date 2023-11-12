import Engine from '@/engine';
import { useContext, useEffect, useMemo } from 'react';

import { stockfishLevelContext } from '@/context/stockfishLevelContext';

const useChessEngine = () => {
  const engine = useMemo(() => new Engine(), []);

  const { stockfishLevel } = useContext(stockfishLevelContext);

  useEffect(() => {
    const stockfish = new Worker('./stockfish.js');
    const DEPTH = stockfishLevel;
    const FEN_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    stockfish.postMessage('uci');
    stockfish.postMessage(`position fen ${FEN_POSITION}`);
    stockfish.postMessage(`go depth ${DEPTH}`);
  }, [stockfishLevel]);

  return { engine };
};

export default useChessEngine;
