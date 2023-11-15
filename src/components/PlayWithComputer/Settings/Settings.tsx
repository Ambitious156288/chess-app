import * as Styled from './Settings.styles';
import { PLAYER_COLORS, STOCKFISH_LEVELS } from '@/consts';
import { useLocalStorageState } from '@/hooks';
import { Radio } from 'antd';
import { useContext, useEffect } from 'react';

import { gameContext } from '@/context/gameContext';
import { stockfishLevelContext } from '@/context/stockfishLevelContext';

type Props = {
  onNext: () => void;
};

const Settings = ({ onNext }: Props) => {
  const { handleChangeStockfishLevel } = useContext(stockfishLevelContext);
  const { handleChangePlayerColor } = useContext(gameContext);

  const { stockfishStrength, color, handleStockfishStrengthChange, handleColorChange } = useLocalStorageState();

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
