import * as Styled from './PlayWithComputer.styles';
import { STOCKFISH_LEVELS } from '@/consts';
import { useChessEngine } from '@/hooks';
import { Chess } from 'chess.js';
import type { Square } from 'chess.js';
import { useMemo, useState } from 'react';
import { Chessboard } from 'react-chessboard';

const PlayWithComputer = () => {
  const { engine, stockfishLevel, handleChangeStockfishLevel } = useChessEngine();
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());

  const findBestMove = () => {
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      if (bestMove) {
        game.move(bestMove);
        setGamePosition(game.fen());
      }
    });
  };

  const onDrop = (sourceSquare: Square, targetSquare: Square, piece: string) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: piece[1].toLowerCase() ?? 'q',
      });
      setGamePosition(game.fen());

      // illegal move
      if (move === null) return false;
      // exit if the game is over
      if (game.isGameOver() || game.isDraw()) return false;

      findBestMove();
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };

  return (
    <Styled.ChessboardContainer>
      {Object.entries(STOCKFISH_LEVELS).map(([level, depth]) => (
        <button key={level} onClick={() => handleChangeStockfishLevel(depth)}>
          {level}
        </button>
      ))}

      <Chessboard id="PlayVsStockfish" position={gamePosition} onPieceDrop={onDrop} />

      <button
        onClick={() => {
          game.reset();
          setGamePosition(game.fen());
        }}
      >
        New game
      </button>
      <button
        onClick={() => {
          game.undo();
          game.undo();
          setGamePosition(game.fen());
        }}
      >
        Undo
      </button>
    </Styled.ChessboardContainer>
  );
};

export default PlayWithComputer;
