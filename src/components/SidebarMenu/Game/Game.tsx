import * as Styled from './Game.styles';
import WinnerInfo from './WinnerInfo';
import { PLAYER_COLORS } from '@/consts';
import { useChessEngine } from '@/hooks';
import { Switch } from 'antd';
import { type Square } from 'chess.js';
import { useContext, useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';

import { gameContext } from '@/context/gameContext';
import { stockfishLevelContext } from '@/context/stockfishLevelContext';

import MovesHistory from '@/components/SidebarMenu/Game/MovesHistory';
import MovesToChoose from '@/components/SidebarMenu/Game/MovesToChoose';

const Game = () => {
  const { engine } = useChessEngine();

  const { game, playerColor } = useContext(gameContext);
  const { stockfishLevel } = useContext(stockfishLevelContext);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [isBoardVisible, setIsBoardVisible] = useState(true);

  const findBestMove = () => {
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      if (bestMove) {
        setTimeout(() => {
          game.move(bestMove);
          setGamePosition(game.fen());
        }, 500);
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

  const isCheckmate = game.isCheckmate();
  const isDraw = game.isDraw();

  return (
    <>
      {isCheckmate || isDraw ? (
        <WinnerInfo isCheckmate={isCheckmate} isDraw={isDraw} turn={game.turn()} />
      ) : (
        <MovesToChoose availableMoves={game.moves()} onMove={handleMove} />
      )}

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
        <MovesHistory
          moves={game.history({ verbose: true })}
          onResetGame={handleResetGame}
          onUndoMove={handleUndoMove}
        />
      </Styled.GameContainer>
    </>
  );
};

export default Game;
