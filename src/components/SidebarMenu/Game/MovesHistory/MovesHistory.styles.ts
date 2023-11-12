import { Table as AntdTable, Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

const Container = styled.div<{ $isVisible: string }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;

const Table = styled(AntdTable)`
  width: 250px;
  height: 300px;
  margin-bottom: 66px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(ButtonAntd)`
  width: 100px;
  margin: 10px;
`;

export { Container, Table, Row, Button };
