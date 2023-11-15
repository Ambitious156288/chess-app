import { type Color } from 'chess.js';

const getWinnerMessage = (isCheckmate: boolean, isDraw: boolean, turn: Color) => {
  let message = '';

  if (isCheckmate) {
    const winner = turn === 'w' ? 'Black' : 'White';
    message = `${winner} is the winner !!!`;
  }
  if (isDraw) message = 'The game is a draw.';

  return message;
};

export { getWinnerMessage };
