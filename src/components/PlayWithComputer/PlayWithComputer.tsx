import Game from './Game/Game';
import { type KeyType } from './PlayWithComputer.model';
import * as Styled from './PlayWithComputer.styles';
import Settings from './Settings';
import { TAB_KEYS } from '@/consts';
import { useState } from 'react';

const SidebarMenu = () => {
  const [activeKey, setActiveKey] = useState<KeyType>(TAB_KEYS.SETTINGS);

  const handleChangeTab = () => {
    setActiveKey((prev) => (prev === TAB_KEYS.SETTINGS ? TAB_KEYS.GAME : TAB_KEYS.SETTINGS));
  };

  const items = [
    {
      key: TAB_KEYS.SETTINGS,
      label: 'Settings',
      children: <Settings onNext={handleChangeTab} />,
    },
    {
      key: TAB_KEYS.GAME,
      label: 'Game',
      children: <Game />,
    },
  ];

  return (
    <Styled.Container>
      <Styled.Tabs tabPosition={'left'} items={items} activeKey={activeKey} onChange={handleChangeTab} />
    </Styled.Container>
  );
};

export default SidebarMenu;
