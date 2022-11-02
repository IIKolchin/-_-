import styled from '@emotion/styled';
import { ChangeEvent, FC } from 'react';
import { Props } from './solo';

type TRadioProps = {
  isChecked: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
};

const Radio: FC<TRadioProps> = ({ isChecked, value, onChange, name }) => {
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
    padding: 0;
  `;

  const Label = styled.label`
    margin-bottom: 8px;
    text-align: center;
    /* font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px; */
  `;
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
