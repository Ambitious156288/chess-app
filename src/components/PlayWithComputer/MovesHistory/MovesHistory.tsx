import * as Styled from './MovesHistory.styles';
import { type MoveType, generateMovesHistoryTable } from '@/utils';
import type { Move } from 'chess.js';
import { useEffect, useState } from 'react';

const COLUMNS = [
  {
    title: '',
    dataIndex: 'number',
    width: 20,
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
};

const MovesHistory = ({ moves }: Props) => {
  const [movesData, setMovesData] = useState<MoveType[]>([]);

  useEffect(() => {
    const generatedMovesHistoryTable = generateMovesHistoryTable(moves);
    setMovesData(generatedMovesHistoryTable);
  }, [moves]);

  return (
    <>
      <Styled.Table columns={COLUMNS} dataSource={movesData} pagination={false} />
    </>
  );
};

export default MovesHistory;
