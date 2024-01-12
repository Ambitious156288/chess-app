import * as Styled from './Multiplayer.styles';
import Image from 'next/image';

const Multiplayer = () => {
  return (
    <Styled.Container>
      <Styled.Heading>Work in progress ...</Styled.Heading>
      <Image src="/assets/work-in-progress.jpg" height={450} width={550} alt="work-in-progress" />
    </Styled.Container>
  );
};

export default Multiplayer;
