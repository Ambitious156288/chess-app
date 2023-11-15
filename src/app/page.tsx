'use client';

import { GameProvider } from '@/context/gameContext';
import { StockfishLevelProvider } from '@/context/stockfishLevelContext';

import PlayWithComputer from '@/components/PlayWithComputer';

const Home = () => (
  <GameProvider>
    <StockfishLevelProvider>
      <PlayWithComputer />
    </StockfishLevelProvider>
  </GameProvider>
);

export default Home;
