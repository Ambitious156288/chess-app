import * as Styled from './MovesToChoose.styles';

type Props = {
  availableMoves: string[];
};

const MovesToChoose = ({ availableMoves }: Props) => {
  return <p>Moves to choose: {availableMoves}</p>;
};

export default MovesToChoose;
