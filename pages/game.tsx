import styled from '@emotion/styled';
import { Props } from '../components/solo';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem, { TItem } from '../components/draggable-item';
import { useDrop } from 'react-dnd';
import { useEffect, useState } from 'react';
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
import { url } from 'inspector';

export default function Game() {
  const elements = useSelector((state: AppState) => state.elements.elements);
  const draggedElements = useSelector(
    (state: AppState) => state.elements.draggedElements
  );
  const sortArr = useSelector((state: AppState) => state.elements.sortArr);
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
    const arr = valueValues === '9' ? [...randomArr(count, 1, 9, 1)] : 
    valueValues === '19' ? [...randomArr(count, 10, 19, 1)] :
    valueValues === '50' ? [...randomArr(count, 20, 50, 1)] :
    valueValues === '99' ? [...randomArr(count, 51, 99, 1)] :
    valueValues === '999' ? [...randomArr(count, 100, 999, 1)] :
    [...generateCharArray(count, 1)];

    if (isButtonAsc) {

      if (valueValues === 'A') {
        const sortAscArray = [...arr].sort((a, b) => a.value.localeCompare(b.value));
         const firstDropAcs = sortAscArray.splice(0, 1);
        dispatch(setSortArr(sortAscArray));
        dispatch(setSortArr(sortAscArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropAcs[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropAcs));
      } else {
        const sortAscArray = [...arr].sort((a, b) => Number(a.value) - Number(b.value));
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
      if(valueValues === 'A') {
        const sortDescArray = [...arr].sort((a, b) => b.value.localeCompare(a.value));
        const firstDropDesc = sortDescArray.splice(0, 1);
        dispatch(setSortArr(sortDescArray));
        const randArr = arr.filter(
          (element) => element.id !== firstDropDesc[0].id
        );
        dispatch(setElements(randArr));
        dispatch(setDraggedElements(firstDropDesc));
      } else {
        const sortDescArray = [...arr].sort((a, b) => Number(b.value) - Number(a.value));
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

  const Section = styled.section`
    background-image: url('https://i.ibb.co/QdKF3Dz/2-1.png');
    display: flex;
    position: relative;
    background-size: cover;
    width: 980px;
    height: 810px;
    margin-bottom: 91px;
  `;

  const Direction = styled.div`
    width: 358px;
    height: 68px;
    background-image: ${() => isButtonAsc? url('')}
  `

  return (
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
      {elements.length === 0 && <Modal/>}
    </Section>
  );
}
