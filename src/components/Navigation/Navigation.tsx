'use client';

import * as Styled from './Navigation.styles';
import { ICONS_URL } from '@/consts';
import { Menu, type MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LINKS = [
  {
    href: '/',
    key: 'play-with-computer',
    label: 'Play with computer',
    icon: ICONS_URL.PLAY_WITH_COMPUTER,
  },
  {
    href: '/multiplayer',
    key: 'multiplayer',
    label: 'Multiplayer',
    icon: ICONS_URL.MULTIPLAYER,
  },
];

const Navigation = () => {
  const [current, setCurrent] = useState(LINKS[0].key);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Styled.Container>
      <Styled.Menu onClick={handleMenuClick} selectedKeys={[current]} mode="horizontal">
        {LINKS.map(({ href, key, label, icon }) => (
          <Menu.Item key={key}>
            <Link href={href}>{label}</Link>
            <Image src={icon} width={35} height={35} alt={label} />
          </Menu.Item>
        ))}
      </Styled.Menu>
    </Styled.Container>
  );
};

export default Navigation;
