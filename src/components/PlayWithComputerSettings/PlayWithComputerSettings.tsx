import * as Styled from './PlayWithComputerSettings.styles';
import { STOCKFISH_LEVELS } from '@/consts';
import { Col, Radio, type RadioChangeEvent } from 'antd';
import React, { useContext, useState } from 'react';

import { stockfishLevelContext } from '@/context/stockfishLevelContext';

const PlayWithComputerSettings = () => {
  const { handleChangeStockfishLevel } = useContext(stockfishLevelContext);

  const [stockfishStrength, setStockfishStrength] = useState(STOCKFISH_LEVELS.EASY);
  const [color, setColor] = useState(1);

  const handleStockfishStrengthChange = (e: RadioChangeEvent) => {
    setStockfishStrength(e.target.value);
  };

  const handleColorChange = (e: RadioChangeEvent) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Styled.Row>
        <Col span={4}>
          <p>You play:</p>
        </Col>
        <Col span={6}>
          <Radio.Group onChange={handleColorChange} value={color} optionType="button" buttonStyle="solid">
            <Radio value={1}>White</Radio>
            <Radio value={2}>Black</Radio>
          </Radio.Group>
        </Col>
      </Styled.Row>

      <Styled.Row>
        <Col span={4}>
          <p>Stockfish strength:</p>
        </Col>
        <Col span={6}>
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
        </Col>
      </Styled.Row>
    </>
  );
};

export default PlayWithComputerSettings;
