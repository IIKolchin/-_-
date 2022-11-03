import styled from '@emotion/styled';
import { FC } from 'react';
import { TRadioProps } from '../types';

const Input = styled.input`
  -webkit-appearance: none;
  z-index: 9;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 22px;
  height: 22px;
  cursor: pointer;
  background-clip: content-box;
  border-radius: 22px;
  background-color: #fff;
  margin: 0;
  background-color: #ffd748;

  &:checked {
    background-color: #104987;
    z-index: 100;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Label = styled.label`
  text-align: center;
  font-family: 'Helvetica';
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

const Radio: FC<TRadioProps> = ({ isChecked, value, onChange, name }) => {
  return (
    <Group>
      <Label>{value}</Label>
      <Input
        type='radio'
        value={value}
        checked={isChecked}
        onChange={onChange}
        id={value}
        name={name}
      />
    </Group>
  );
};

export default Radio;
