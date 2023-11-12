'use client';

import { GameProvider } from '@/context/gameContext';
import { StockfishLevelProvider } from '@/context/stockfishLevelContext';

import SidebarMenu from '@/components/SidebarMenu';

const Home = () => (
  <GameProvider>
    <StockfishLevelProvider>
      <SidebarMenu />
      {/* PlayWithComputer */}
    </StockfishLevelProvider>
  </GameProvider>
);

export default Home;
