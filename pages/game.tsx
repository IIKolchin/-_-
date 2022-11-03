import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../components/draggable-item';
import { useEffect } from 'react';
import DropContainer from '../components/drop-container';
import { generateCharArray, randomArr } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDraggedElements,
  setElements,
  setSortArr,
} from '../store/elementsSlice';
import { AppState } from '../store/store';
import Modal from '../components/modal';

const Game = () => {
  const elements = useSelector((state: AppState) => state.elements.elements);
  const draggedElements = useSelector(
    (state: AppState) => state.elements.draggedElements
  );
  const sortArr = useSelector((state: AppState) => state.elements.sortArr);
  const theme = useSelector((state: AppState) => state.theme.theme);
  const dispatch = useDispatch();

  const valueCountItems = useSelector(
    (state: AppState) => state.radio.valueCountItems
  );
  const valueValues = useSelector((state: AppState) => state.radio.valueValues);
  const isButtonAsc = useSelector(
    (state: AppState) => state.buttons.isButtonAsc
  );
  const isButtonDesc = useSelector(
    (state: AppState) => state.buttons.isButtonDesc
  );
  const count = +valueCountItems + 1;

  useEffect(() => {
    const arr =
      valueValues === '9'
        ? [...randomArr(count, 1, 9, 1, theme!)]
        : valueValues === '19'
        ? [...randomArr(count, 10, 19, 1, theme!)]
        : valueValues === '50'
        ? [...randomArr(count, 20, 50, 1, theme!)]
        : valueValues === '99'
        ? [...randomArr(count, 51, 99, 1, theme!)]
        : valueValues === '999'
        ? [...randomArr(count, 100, 999, 1, theme!)]
        : [...generateCharArray(count, 1, theme!)];

    if (isButtonAsc) {
      if (valueValues === 'A') {
        const sortAscArray = [...arr].sort((a, b) =>
          a.value.localeCompare(b.value)
        );
        const firstDropAcs = sortAscArray.splice(0, 1);
        dispatch(setSortArr(sortAscArray));
        dispatch(setSortArr(sortAscArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropAcs[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropAcs));
      } else {
        const sortAscArray = [...arr].sort(
          (a, b) => Number(a.value) - Number(b.value)
        );
        const firstDropAcs = sortAscArray.splice(0, 1);
        dispatch(setSortArr(sortAscArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropAcs[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropAcs));
      }
    }

    if (isButtonDesc) {
      if (valueValues === 'A') {
        const sortDescArray = [...arr].sort((a, b) =>
          b.value.localeCompare(a.value)
        );
        const firstDropDesc = sortDescArray.splice(0, 1);
        dispatch(setSortArr(sortDescArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropDesc[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropDesc));
      } else {
        const sortDescArray = [...arr].sort(
          (a, b) => Number(b.value) - Number(a.value)
        );
        const firstDropDesc = sortDescArray.splice(0, 1);
        dispatch(setSortArr(sortDescArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropDesc[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropDesc));
      }
    }
  }, [dispatch]);

  const handleDrop = (itemId: any) => {
    const dropItem = elements.filter((element) => element.id === itemId.id)[0];

    if (dropItem.value === sortArr[0].value) {
      dispatch(
        setElements([...elements.filter((element) => element.id !== itemId.id)])
      );
      dispatch(
        setSortArr([...sortArr.filter((element) => element.id !== itemId.id)])
      );
      dispatch(
        setDraggedElements([
          ...draggedElements,
          ...elements.filter((element) => element.id === itemId.id),
        ])
      );
    }
  };

  const img =
    isButtonAsc && theme === '1'
      ? 'https://i.ibb.co/wW8FpL9/6.png'
      : isButtonAsc && theme === '2'
      ? 'https://i.ibb.co/PDx9Jsm/image.png'
      : isButtonAsc && theme === '3'
      ? 'https://i.ibb.co/LSrjHxG/2.png'
      : isButtonAsc && theme === '4'
      ? 'https://i.ibb.co/4Rrp1v4/4.png'
      : isButtonDesc && theme === '1'
      ? 'https://i.ibb.co/Kw6x5QF/7.png'
      : isButtonDesc && theme === '2'
      ? 'https://i.ibb.co/0YMqyW6/1.png'
      : isButtonDesc && theme === '3'
      ? 'https://i.ibb.co/FJpxsD0/3.png'
      : 'https://i.ibb.co/6PfkZsQ/5.png';

  const Section = styled.section`
    background-image: url(${img});
    display: flex;
    position: relative;
    background-size: cover;
    width: 980px;
    height: 810px;
    margin-bottom: 91px;
  `;

  return (
    <>
      {theme && (
        <Section>
          <DndProvider backend={HTML5Backend}>
            {elements.length !== 0 &&
              elements.map((item, i) => {
                return <DraggableItem key={i} data={item} />;
              })}
            <DropContainer onDropHandler={handleDrop}>
              {draggedElements.map((item, i) => (
                <DraggableItem key={i} data={item} isSmall />
              ))}
            </DropContainer>
          </DndProvider>
          {elements.length === 0 && <Modal />}
        </Section>
      )}
    </>
  );
};

export default Game;
