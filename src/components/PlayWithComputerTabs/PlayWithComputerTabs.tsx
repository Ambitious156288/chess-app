import * as Styled from './PlayWithComputerTabs.styles';
import { TAB_KEYS } from '@/consts';
import { useState } from 'react';

import PlayWithComputer from '@/components/PlayWithComputer';
import PlayWithComputerSettings from '@/components/PlayWithComputerSettings';

type KeyType = TAB_KEYS.SETTINGS | TAB_KEYS.GAME;

const PlayWithComputerTabs = () => {
  const [activeKey, setActiveKey] = useState<KeyType>(TAB_KEYS.SETTINGS);

  const handleChangeTab = () => {
    setActiveKey((prev) => (prev === TAB_KEYS.SETTINGS ? TAB_KEYS.GAME : TAB_KEYS.SETTINGS));
  };

  const items = [
    {
      key: TAB_KEYS.SETTINGS,
      label: 'Settings',
      children: <PlayWithComputerSettings onNext={handleChangeTab} />,
    },
    {
      key: TAB_KEYS.GAME,
      label: 'Game',
      children: <PlayWithComputer />,
    },
  ];

  return (
    <Styled.Container>
      <Styled.Tabs tabPosition={'left'} items={items} activeKey={activeKey} onChange={handleChangeTab} />
    </Styled.Container>
  );
};

export default PlayWithComputerTabs;
