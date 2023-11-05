import * as Styled from './PlayWithComputer.styles';
import { STOCKFISH_LEVELS } from '@/consts';
import { useChessEngine } from '@/hooks';
import { Button, Switch } from 'antd';
import { Chess, type Square } from 'chess.js';
import { useMemo, useState } from 'react';
import { Chessboard } from 'react-chessboard';

import MovesHistory from '@/components/PlayWithComputer/MovesHistory';
import MovesToChoose from '@/components/PlayWithComputer/MovesToChoose';

const PlayWithComputer = () => {
  const { engine, stockfishLevel, handleChangeStockfishLevel } = useChessEngine();
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [isBoardVisible, setIsBoardVisible] = useState(true);

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

  const handleMove = (move: string) => {
    game.move(move);
    setGamePosition(game.fen());
    findBestMove();
  };

  const toggleBoardVisibility = () => {
    setIsBoardVisible((prev) => !prev);
  };

  return (
    <>
      {Object.entries(STOCKFISH_LEVELS).map(([level, depth]) => (
        <Button type="primary" ghost key={level} onClick={() => handleChangeStockfishLevel(depth)}>
          {level}
        </Button>
      ))}

      <MovesToChoose availableMoves={game.moves()} onMove={handleMove} />

      <Button
        type="primary"
        onClick={() => {
          game.reset();
          setGamePosition(game.fen());
        }}
      >
        New game
      </Button>
      <Button
        type="primary"
        onClick={() => {
          game.undo();
          game.undo();
          setGamePosition(game.fen());
        }}
      >
        Undo
      </Button>

      <Switch checkedChildren="show board" unCheckedChildren="hide board" onChange={toggleBoardVisibility} />

      <Styled.GameContainer>
        <Styled.ChessboardWrapper>
          <Chessboard id="PlayVsStockfish" position={isBoardVisible ? gamePosition : 'empty'} onPieceDrop={onDrop} />
        </Styled.ChessboardWrapper>
        <MovesHistory moves={game.history({ verbose: true })} />
      </Styled.GameContainer>
    </>
  );
};

export default PlayWithComputer;
