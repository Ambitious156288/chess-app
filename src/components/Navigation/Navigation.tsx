'use client';

import * as Styled from './Navigation.styles';
import Link from 'next/link';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/multiplayer', label: 'Multiplayer' },
];

const Navigation = () => {
  return (
    <Styled.Container>
      {LINKS.map(({ href, label }) => (
        <Link key={href} href={href}>
          <p>{label}</p>
        </Link>
      ))}
    </Styled.Container>
  );
};

export default Navigation;
