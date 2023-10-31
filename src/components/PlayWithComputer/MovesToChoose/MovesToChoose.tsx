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
    <>
      <h3>Moves to choose: </h3>
      {availableMoves.map((move, id) => (
        <Styled.Button key={id} onClick={() => handleChooseMove(move)}>
          {move}
        </Styled.Button>
      ))}
    </>
  );
};

export default MovesToChoose;
