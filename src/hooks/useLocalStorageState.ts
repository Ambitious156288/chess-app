import { LOCAL_STORAGE_ITEMS, PLAYER_COLORS, STOCKFISH_LEVELS } from '@/consts';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';

import type { PlayerColorType } from '@/context/gameContext';

const useLocalStorageState = () => {
  const [stockfishStrength, setStockfishStrength] = useState<number>(
    Number(localStorage.getItem(LOCAL_STORAGE_ITEMS.STOCKFISH_LEVELS)) || STOCKFISH_LEVELS.EASY,
  );
  const [color, setColor] = useState<PlayerColorType | string>(
    localStorage.getItem(LOCAL_STORAGE_ITEMS.PLAYER_COLORS) || PLAYER_COLORS.WHITE,
  );

  const handleStockfishStrengthChange = (e: RadioChangeEvent) => {
    const value = e.target.value as string;
    setStockfishStrength(Number(value));
    localStorage.setItem(LOCAL_STORAGE_ITEMS.STOCKFISH_LEVELS, value);
  };

  const handleColorChange = (e: RadioChangeEvent) => {
    const value = e.target.value as PlayerColorType;
    setColor(value);
    localStorage.setItem(LOCAL_STORAGE_ITEMS.PLAYER_COLORS, value);
  };

  return {
    stockfishStrength,
    color,
    handleStockfishStrengthChange,
    handleColorChange,
  };
};

export default useLocalStorageState;
