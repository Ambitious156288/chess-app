'use client';

import { GameProvider } from '@/context/gameContext';
import { StockfishLevelProvider } from '@/context/stockfishLevelContext';

import PlayWithComputerTabs from '@/components/PlayWithComputerTabs';

const Home = () => (
  <GameProvider>
    <StockfishLevelProvider>
      <PlayWithComputerTabs />
    </StockfishLevelProvider>
  </GameProvider>
);

export default Home;
