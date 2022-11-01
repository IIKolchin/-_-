import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { Props } from './solo';
import { FC } from 'react';

export type TItem = { id: number; value: number; image: string }

export type TItems = {
  data: TItem;
};

const DraggableItem: FC<TItems> = ({ data }) => {
  const { id, image, value } = data;
  const [{ isDrag }, dragRef] = useDrag({
    type: 'item',
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const Item = styled.div`
    width: 158px;
    height: 158px;
    background-image: url(${(props: Props) => props.img});
  `;

  return (
    !isDrag ? (
      <Item img={image} ref={dragRef}>
        {value}
      </Item>
    ) : null
  );
};

export default DraggableItem;
