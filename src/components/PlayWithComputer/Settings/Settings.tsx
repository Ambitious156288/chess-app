import * as Styled from './Settings.styles';
import { LOCAL_STORAGE_ITEMS, PLAYER_COLORS, STOCKFISH_LEVELS } from '@/consts';
import { Radio, type RadioChangeEvent } from 'antd';
import { useContext, useEffect, useState } from 'react';

import { gameContext } from '@/context/gameContext';
import { stockfishLevelContext } from '@/context/stockfishLevelContext';

type Props = {
  onNext: () => void;
};

const Settings = ({ onNext }: Props) => {
  const { handleChangeStockfishLevel } = useContext(stockfishLevelContext);
  const { handleChangePlayerColor } = useContext(gameContext);

  const [stockfishStrength, setStockfishStrength] = useState<number>(
    Number(localStorage.getItem(LOCAL_STORAGE_ITEMS.STOCKFISH_LEVELS)) || STOCKFISH_LEVELS.EASY,
  );
  const [color, setColor] = useState(localStorage.getItem(LOCAL_STORAGE_ITEMS.PLAYER_COLORS) || PLAYER_COLORS.WHITE);

  const handleStockfishStrengthChange = (e: RadioChangeEvent) => {
    setStockfishStrength(e.target.value);
    localStorage.setItem(LOCAL_STORAGE_ITEMS.STOCKFISH_LEVELS, e.target.value);
  };

  const handleColorChange = (e: RadioChangeEvent) => {
    setColor(e.target.value);
    localStorage.setItem(LOCAL_STORAGE_ITEMS.PLAYER_COLORS, e.target.value);
  };

  useEffect(() => {
    handleChangePlayerColor(color);
  }, [color]);

  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Col span={12}>
          <p>You play:</p>
        </Styled.Col>
        <Styled.Col span={12}>
          <Radio.Group onChange={handleColorChange} value={color} optionType="button" buttonStyle="solid">
            <Radio value={PLAYER_COLORS.WHITE}>White</Radio>
            <Radio value={PLAYER_COLORS.BLACK}>Black</Radio>
          </Radio.Group>
        </Styled.Col>
      </Styled.Row>

      <Styled.Row>
        <Styled.Col span={12}>
          <p>Stockfish strength:</p>
        </Styled.Col>
        <Styled.Col span={12}>
          <Radio.Group
            onChange={handleStockfishStrengthChange}
            value={stockfishStrength}
            optionType="button"
            buttonStyle="solid"
          >
            {Object.entries(STOCKFISH_LEVELS).map(([level, depth]) => (
              <Radio key={depth} value={depth} onClick={() => handleChangeStockfishLevel(depth)}>
                {level}
              </Radio>
            ))}
          </Radio.Group>
        </Styled.Col>
      </Styled.Row>

      <Styled.Button type="primary" shape="round" onClick={onNext}>
        Next
      </Styled.Button>
    </Styled.Container>
  );
};

export default Settings;
