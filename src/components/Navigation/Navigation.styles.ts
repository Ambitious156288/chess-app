import { Menu as AntdMenu } from 'antd';
import styled from 'styled-components';

const Container = styled.div``;

const Menu = styled(AntdMenu)`
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

export { Container, Menu };
