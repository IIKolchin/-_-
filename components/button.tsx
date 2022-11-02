import styled from '@emotion/styled';
import { FC } from 'react';
import { Props } from './solo';


type TButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    children: any;
    win?: boolean;
    ascDesc?: boolean;
}

const Button:FC<TButtonProps> = ({onClick, disabled, children, ...props}) => {

    const Button = styled.button`
    position: ${() => props.win ? 'absolute' : 'relative'};
    top: ${() => props.win ? '350px' : null};
    left: ${() => props.win ? '220px' : null};
    color: ${() => props.win ? '#fff' : '#423F45'};
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    z-index: 10;
    line-height: 39px;
    width: ${(props: Props) => (props.ascDesc ? 'auto' : '260px')};
    height: ${(props: Props) => (props.ascDesc ? '44px' : '60px')};
    background-color: ${(props: Props) =>
      props.ascDesc ? '#FFD748' : '#38DF7A'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-top: 73px;
    margin-left: ${(props: Props) => (props.ascDesc ? '0' : '220px')};
    margin-right: ${(props: Props) => (props.ascDesc ? '0' : '220px')};

    &:first-of-type {
      margin-left: 80px;
      width: 271px;
      grid-area: a;
    }

    &:nth-of-type(2) {
      width: 234px;
      margin-right: 60px;
      grid-area: b;
    }
    &:nth-of-type(3) {
      color: #fff;
      grid-area: c;
    }
  `;
    return (
       <Button onClick={onClick} disabled={disabled}>{children}</Button>
    )
}

export default Button;