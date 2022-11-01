import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { useDrop } from 'react-dnd';

type TDropsContainerProps = {
    children: ReactNode,
    onDropHandler: (id: unknown) => void 
}

const DropContainer: FC<TDropsContainerProps> = ( {children, onDropHandler} ): JSX.Element => {
  const [, dropTarget] = useDrop({
    accept: 'item',
    drop(itemId) {
      onDropHandler(itemId);
    },
  });

  const Container = styled.div`
    background-image: url('https://i.ibb.co/DbTPwTj/Group-9032.png');
    /* object-fit: cover; */
display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    width: 890px;
    height: 223px;
    position: absolute;
    left: 45px;
    bottom: 40px;
  `;

  return <Container ref={dropTarget}>{children}</Container>;
};

export default DropContainer;
