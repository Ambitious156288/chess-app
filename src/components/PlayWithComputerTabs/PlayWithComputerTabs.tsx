import * as Styled from './PlayWithComputerTabs.styles';

import PlayWithComputer from '@/components/PlayWithComputer';
import PlayWithComputerSettings from '@/components/PlayWithComputerSettings';

const items = [
  {
    key: '0',
    label: 'Settings',
    children: <PlayWithComputerSettings />,
  },
  {
    key: '1',
    label: 'Game',
    children: <PlayWithComputer />,
  },
];

const PlayWithComputerTabs = () => <Styled.Tabs tabPosition={'left'} items={items} />;

export default PlayWithComputerTabs;
