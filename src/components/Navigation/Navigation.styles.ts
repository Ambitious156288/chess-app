import { Menu as AntdMenu } from 'antd';
import styled from 'styled-components';

export const Container = styled.div``;

export const Menu = styled(AntdMenu)`
  display: flex;
  justify-content: center;
  background: #ddd;
  border-radius: 10px;

  li.ant-menu-item {
    margin-left: 20px;

    span.ant-menu-title-content {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }
  }
`;
