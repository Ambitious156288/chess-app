import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  margin: -20px 0 15px;
`;

const Moves = styled.div`
  max-width: 85%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -10px;
`;

const Button = styled(AntdButton)`
  width: 70px;
  margin: 3px;
`;

export { Container, Moves, Button };
