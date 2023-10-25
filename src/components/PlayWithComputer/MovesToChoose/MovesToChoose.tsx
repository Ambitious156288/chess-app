import * as Styled from './MovesToChoose.styles';

type Props = {
  availableMoves: string[];
};

const MovesToChoose = ({ availableMoves }: Props) => {
  const handleChooseMove = (move: string) => {
    // @TODO
  };

  return (
    <>
      <h3>Moves to choose: </h3>

      {availableMoves.map((move, id: number) => (
        <Styled.Button key={id} onClick={() => handleChooseMove(move)}>
          {move}
        </Styled.Button>
      ))}
    </>
  );
};

export default MovesToChoose;
