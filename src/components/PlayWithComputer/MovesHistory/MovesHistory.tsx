import * as Styled from './MovesHistory.styles';
import { type MoveType, generateMovesHistoryTable } from '@/utils';
import { Button } from 'antd';
import { type Chess } from 'chess.js';
import { useEffect, useState } from 'react';

const COLUMNS = [
  {
    title: '',
    dataIndex: 'number',
    width: 45,
  },
  {
    title: 'White',
    dataIndex: 'w',
    width: 80,
  },
  {
    title: 'Black',
    dataIndex: 'b',
    width: 80,
  },
];

type Props = {
  game: Chess;
  onResetGame: () => void;
  onUndoMove: () => void;
};

const MovesHistory = ({ game, onResetGame, onUndoMove }: Props) => {
  const [movesData, setMovesData] = useState<MoveType[]>([]);

  const moves = game.history({ verbose: true });
  const isVisible = game.history().length !== 0;

  useEffect(() => {
    const generatedMovesHistoryTable = generateMovesHistoryTable(moves);
    setMovesData(generatedMovesHistoryTable);
  }, [moves]);

  return (
    <Styled.Container $isVisible={isVisible}>
      <Styled.Table columns={COLUMNS} dataSource={movesData} pagination={false} scroll={{ y: 300 }} />

      <Styled.Row>
        <Styled.Button type="primary" onClick={onResetGame}>
          New game
        </Styled.Button>
        <Styled.Button type="primary" onClick={onUndoMove}>
          Undo
        </Styled.Button>
      </Styled.Row>
    </Styled.Container>
  );
};

export default MovesHistory;
