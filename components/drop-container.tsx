import styled from '@emotion/styled';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { TDropsContainerProps } from '../types';



const DropContainer: FC<TDropsContainerProps> = ({
  children,
  onDropHandler,
}): JSX.Element => {
  const theme = useSelector((state: AppState) => state.theme.theme);
  const isButtonAsc = useSelector(
    (state: AppState) => state.buttons.isButtonAsc
  );
  const [, dropTarget] = useDrop({
    accept: 'item',
    drop(itemId) {
      onDropHandler(itemId);
    },
  });

  const img =
    theme === '1'
      ? 'https://i.ibb.co/DbTPwTj/Group-9032.png'
      : theme === '2'
      ? 'https://i.ibb.co/CnJHLJD/Group-9046.png'
      : theme === '3'
      ? 'https://i.ibb.co/bRYR5rQ/Group-9047.png'
      : 'https://i.ibb.co/xqGnmCw/Group-9044-1-1.png';

  const Container = styled.div`
    background-image: url(${img});
    display: flex;
    flex-direction: ${() => (isButtonAsc ? 'row' : 'row-reverse')};
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
