import { Tabs as TabsAntd } from 'antd';
import styled from 'styled-components';

const Tabs = styled(TabsAntd)`
  margin-top: 20px;

  div.ant-tabs-nav-list div.ant-tabs-tab {
    padding-left: 5px;
  }
`;

export { Tabs };
