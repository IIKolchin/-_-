import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';

type TDropsContainerProps = {
  children: ReactNode;
  onDropHandler: (id: unknown) => void;
};

const DropContainer: FC<TDropsContainerProps> = ({
  children,
  onDropHandler,
}): JSX.Element => {

  const isButtonAsc = useSelector(
    (state: AppState) => state.buttons.isButtonAsc
  );
  const isButtonDesc = useSelector(
    (state: AppState) => state.buttons.isButtonDesc
  );
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
    flex-direction: ${() => isButtonAsc ? 'row' : 'row-reverse'};
    background-size: cover;
    padding-top: 46px;
    padding-left: 30px;
    padding-right: 50px;
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
