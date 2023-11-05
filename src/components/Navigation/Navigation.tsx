'use client';

import * as Styled from './Navigation.styles';
import { Menu, type MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LINKS = [
  { href: '/', key: 'play-with-computer', label: 'Play with computer', icon: '/computer.svg' },
  { href: '/multiplayer', key: 'multiplayer', label: 'Multiplayer', icon: '/hands-shake.svg' },
];

const Navigation = () => {
  const [current, setCurrent] = useState(LINKS[0].key);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Styled.Container>
      <Menu onClick={handleMenuClick} selectedKeys={[current]} mode="horizontal">
        {LINKS.map(({ href, key, label, icon }) => (
          <Menu.Item key={key}>
            <Link href={href}>{label}</Link>
            <Image src={icon} width={35} height={35} alt={label} />
          </Menu.Item>
        ))}
      </Menu>
    </Styled.Container>
  );
};

export default Navigation;
