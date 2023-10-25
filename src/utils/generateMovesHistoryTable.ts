import type { Move } from 'chess.js';

type MoveType = {
  key: number;
  number: number;
  w: string;
  b: string;
};

const generateMovesHistoryTable = (moves: Move[]) =>
  moves.reduce((acc: MoveType[], el, index, arr) => {
    const shouldPushRow = index % 2 === 0;
    const pairIndex = index / 2 + 1;

    const row = {
      key: pairIndex,
      number: pairIndex,
      w: el.san,
      b: arr[index + 1] ? arr[index + 1].san : '',
    };

    if (shouldPushRow) acc.push(row);
    return acc;
  }, []);

export { generateMovesHistoryTable };
export type { MoveType };
