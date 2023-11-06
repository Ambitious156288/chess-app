import * as Styled from './PlayWithComputerSettings.styles';
import { Col, Radio, type RadioChangeEvent, Row } from 'antd';
import React, { useState } from 'react';

const PlayWithComputerSettings = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  // @TODO add logic

  return (
    <>
      <Styled.Row>
        <Col span={4}>
          <p>You play:</p>
        </Col>
        <Col span={6}>
          <Radio.Group onChange={onChange} value={value} optionType="button" buttonStyle="solid">
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
          <Radio.Group onChange={onChange} value={value} optionType="button" buttonStyle="solid">
            <Radio value={1}>Easy</Radio>
            <Radio value={2}>Medium</Radio>
            <Radio value={3}>Hard</Radio>
          </Radio.Group>
        </Col>
      </Styled.Row>
    </>
  );
};

export default PlayWithComputerSettings;
