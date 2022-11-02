import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { Props } from './solo';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';

export type TItem = { id: number; value: number; image: string };

export type TItems = {
  data: TItem;
  isSmall?: boolean;
};

const DraggableItem: FC<TItems> = ({ data, isSmall }) => {
  const { id, image, value } = data;
  const valueCountItems = useSelector(
    (state: AppState) => state.radio.valueCountItems
  );
  const [{ isDrag }, dragRef] = useDrag({
    type: 'item',
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const Item = styled.div`
    position: ${() => (!isSmall ? 'absolute' : null)};

    width: ${() => (isSmall ? '131px' : '158px')};
    height: ${() => (isSmall ? '131px' : '158px')};
    background-image: url(${(props: Props) => props.img});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 500;
    margin-left: 3px;
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 2px;
    -webkit-text-stroke: 1px #242546;
    color: #ffffff;
    text-shadow: 1px 1px 0 #242546, -1px 1px 0 #242546, 1px -1px 0 #242546,
      -1px -1px 0 #242546, 0px 1px 0 #242546, 0px -1px 0 #242546,
      -1px 0px 0 #242546, 1px 0px 0 #242546, 2px 2px 0 #242546,
      -2px 2px 0 #242546, 2px -2px 0 #242546, -2px -2px 0 #242546,
      0px 2px 0 #242546, 0px -2px 0 #242546, -2px 0px 0 #242546,
      2px 0px 0 #242546, 1px 2px 0 #242546, -1px 2px 0 #242546,
      1px -2px 0 #242546, -1px -2px 0 #242546, 2px 1px 0 #242546,
      -2px 1px 0 #242546, 2px -1px 0 #242546, -2px -1px 0 #242546;

    &:first-of-type {
      top: ${() =>
        !isSmall && valueCountItems === '5'
          ? '233px'
          : !isSmall && valueCountItems === '4'
          ? '233px'
          : !isSmall && valueCountItems === '3'
          ? '233px'
          : '170px'};
      left: ${() =>
        !isSmall && valueCountItems === '5'
          ? '65px'
          : !isSmall && valueCountItems === '4'
          ? '102px'
          : !isSmall && valueCountItems === '3'
          ? '200px'
          : '315px'};
    }

    &:nth-of-type(2) {
      top: ${() =>
        !isSmall && valueCountItems === '5'
          ? '133px'
          : !isSmall && valueCountItems === '4'
          ? '133px'
          : !isSmall && valueCountItems === '3'
          ? '133px'
          : '170px'};
      left: ${() =>
        !isSmall && valueCountItems === '5'
          ? '269px'
          : !isSmall && valueCountItems === '4'
          ? '316px'
          : !isSmall && valueCountItems === '3'
          ? '420px'
          : '513px'};
    }

    &:nth-of-type(3) {
      top: ${() =>
        !isSmall && valueCountItems === '5'
          ? '280px'
          : !isSmall && valueCountItems === '4'
          ? '234px'
          : !isSmall && valueCountItems === '3'
          ? '234px'
          : null};
      left: ${() =>
        !isSmall && valueCountItems === '5'
          ? '399px'
          : !isSmall && valueCountItems === '4'
          ? '506px'
          : !isSmall && valueCountItems === '3'
          ? '610px'
          : null};
    }

    &:nth-of-type(4) {
      top: ${() =>
        !isSmall && valueCountItems === '5'
          ? '138px'
          : !isSmall && valueCountItems === '4'
          ? '133px'
          : null};
      left: ${() =>
        !isSmall && valueCountItems === '5'
          ? '520px'
          : !isSmall && valueCountItems === '4'
          ? '715px'
          : null};
    }

    &:nth-of-type(5) {
      top: ${() =>
        !isSmall && valueCountItems === '5'
          ? '240px'
          : null};
      left: ${() =>
        !isSmall && valueCountItems === '5'
          ? '740px'
          : null};
    }
  `;

  return !isDrag ? (
    <Item img={image} ref={dragRef}>
      {value}
    </Item>
  ) : null;
};

export default DraggableItem;
