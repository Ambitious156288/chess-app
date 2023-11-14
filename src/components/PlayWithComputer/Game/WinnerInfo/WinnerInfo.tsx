import * as Styled from './WinnerInfo.styles';
import { type Color } from 'chess.js';

type Props = {
  isCheckmate: boolean;
  isDraw: boolean;
  turn: Color;
};

const WinnerInfo = ({ isCheckmate, isDraw, turn }: Props) => {
  let message = '';

  if (isCheckmate) {
    const winner = turn === 'w' ? 'Black' : 'White';
    message = `${winner} is the winner !!!`;
  }
  if (isDraw) message = 'The game is a draw.';

  return (
    <Styled.Container>
      <h3>{message}</h3>
    </Styled.Container>
  );
};

export default WinnerInfo;
