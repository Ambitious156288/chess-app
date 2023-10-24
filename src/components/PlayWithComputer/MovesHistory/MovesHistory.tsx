import * as Styled from './MovesHistory.styles';

type Props = {
  moves: string[];
};

const MovesHistory = ({ moves }: Props) => {
  return <p>Moves history: {moves} &#9823;</p>;
};

export default MovesHistory;
