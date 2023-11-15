import * as Styled from './WinnerInfo.styles';
import { getWinnerMessage } from '@/utils';
import { type Color } from 'chess.js';

type Props = {
  isCheckmate: boolean;
  isDraw: boolean;
  turn: Color;
};

const WinnerInfo = ({ isCheckmate, isDraw, turn }: Props) => {
  const message = getWinnerMessage(isCheckmate, isDraw, turn);

  return (
    <Styled.Container>
      <h3>{message}</h3>
    </Styled.Container>
  );
};

export default WinnerInfo;
