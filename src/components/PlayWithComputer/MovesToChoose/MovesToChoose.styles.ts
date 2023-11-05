import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const Moves = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(AntdButton)`
  width: 70px;
  margin: 3px;
`;

export { Container, Moves, Button };
