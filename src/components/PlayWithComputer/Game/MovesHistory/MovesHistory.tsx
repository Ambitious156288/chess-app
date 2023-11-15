import * as Styled from './MovesHistory.styles';
import { type MoveType } from '@/types';
import { generateMovesHistoryTable } from '@/utils';
import { type Move } from 'chess.js';
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
  moves: Move[];
  onResetGame: () => void;
  onUndoMove: () => void;
};

const MovesHistory = ({ moves, onResetGame, onUndoMove }: Props) => {
  const [movesData, setMovesData] = useState<MoveType[]>([]);

  useEffect(() => {
    const generatedMovesHistoryTable = generateMovesHistoryTable(moves);
    setMovesData(generatedMovesHistoryTable);
  }, [moves]);

  return (
    <Styled.Container $isVisible={moves.length !== 0}>
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
