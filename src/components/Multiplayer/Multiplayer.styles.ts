import { Button as ButtonAntd, Col as ColAntd, Row as RowAntd } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled(RowAntd)`
  align-items: center;
`;

const Col = styled(ColAntd)`
  width: 300px;
`;

const Button = styled(ButtonAntd)`
  width: 100px;
  margin-top: 40px;
`;

export { Container, Row, Col, Button };
