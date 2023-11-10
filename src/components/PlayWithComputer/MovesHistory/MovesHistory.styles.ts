import { Table as AntdTable } from 'antd';
import styled from 'styled-components';

const Table = styled(AntdTable)<{ isVisible: string }>`
  width: 230px;
  margin-left: 40px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

export { Table };
