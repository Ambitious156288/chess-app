'use client';

import { GameProvider } from '@/context/gameContext';

import PlayWithComputerTabs from '@/components/PlayWithComputerTabs';

const Home = () => (
  <GameProvider>
    <PlayWithComputerTabs />
  </GameProvider>
);

export default Home;
