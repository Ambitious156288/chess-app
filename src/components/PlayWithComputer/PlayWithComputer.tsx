import * as Styled from './PlayWithComputer.styles';
import { PLAYER_COLORS } from '@/consts';
import { useChessEngine } from '@/hooks';
import { Button, Switch } from 'antd';
import { type Square } from 'chess.js';
import { useContext, useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';

import { gameContext } from '@/context/gameContext';
import { stockfishLevelContext } from '@/context/stockfishLevelContext';

import MovesHistory from '@/components/PlayWithComputer/MovesHistory';
import MovesToChoose from '@/components/PlayWithComputer/MovesToChoose';

const PlayWithComputer = () => {
  const { engine } = useChessEngine();

  const { game, playerColor } = useContext(gameContext);
  const { stockfishLevel } = useContext(stockfishLevelContext);

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

  const handleResetGame = () => {
    game.reset();
    setGamePosition(game.fen());
  };

  const handleUndoMove = () => {
    game.undo();
    game.undo();
    setGamePosition(game.fen());
  };

  useEffect(() => {
    handleResetGame();

    if (playerColor === PLAYER_COLORS.BLACK) findBestMove();
  }, [playerColor, stockfishLevel]);

  return (
    <>
      <MovesToChoose availableMoves={game.moves()} onMove={handleMove} />

      <Styled.GameContainer>
        <Styled.ChessboardWrapper>
          <Chessboard
            id="PlayVsStockfish"
            position={isBoardVisible ? gamePosition : 'empty'}
            onPieceDrop={onDrop}
            boardOrientation={playerColor}
          />
          <Switch checkedChildren="show board" unCheckedChildren="hide board" onChange={toggleBoardVisibility} />
        </Styled.ChessboardWrapper>
        <MovesHistory game={game} onResetGame={handleResetGame} onUndoMove={handleUndoMove} />
      </Styled.GameContainer>
    </>
  );
};

export default PlayWithComputer;
