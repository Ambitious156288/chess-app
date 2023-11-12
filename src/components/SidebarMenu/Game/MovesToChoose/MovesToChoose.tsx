import * as Styled from './MovesToChoose.styles';

type Props = {
  availableMoves: string[];
  onMove: (move: string) => void;
};

const MovesToChoose = ({ availableMoves, onMove }: Props) => {
  const handleChooseMove = (move: string) => {
    onMove(move);
  };

  return (
    <Styled.Container>
      <h3>Moves to choose: </h3>
      <Styled.Moves>
        {availableMoves.map((move, id) => (
          <Styled.Button key={id} onClick={() => handleChooseMove(move)}>
            {move}
          </Styled.Button>
        ))}
      </Styled.Moves>
    </Styled.Container>
  );
};

export default MovesToChoose;
