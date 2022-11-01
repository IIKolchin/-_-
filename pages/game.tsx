import styled from '@emotion/styled';
import { Props } from '../components/solo';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem, { TItem } from '../components/draggable-item';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import DropContainer from '../components/drop-container';




export default function Game() {
  const arr = [
    { value: 1, image: 'https://i.ibb.co/Xb6SQ9N/Group-1.png', id: 1 },
    { value: 2, image: 'https://i.ibb.co/q9fg7gC/Group-2.png', id: 2 },
    { value: 3, image: 'https://i.ibb.co/0m4NDWP/Group-3.png', id: 3 },
    { value: 4, image: 'https://i.ibb.co/wwj1dFb/Group.png', id: 4 },
    { value: 5, image: 'https://i.ibb.co/0m4NDWP/Group-3.png', id: 5 },
  ];
  const [elements, setElements] = useState(arr);
  const [draggedElements, setDraggedElements] = useState<TItem[]>([]);

  const handleDrop = (itemId: any) => {
    setElements([...elements.filter((element) => element.id !== itemId.id)]);

    setDraggedElements([
      ...draggedElements,
      ...elements.filter((element) => element.id === itemId.id),
    ]);
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

  //   const DropContainer = styled.div`
  //     background-image: url('https://i.ibb.co/DbTPwTj/Group-9032.png');
  //     /* object-fit: cover; */

  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     width: 890px;
  //     height: 223px;
  //     position: absolute;
  //     left: 45px;
  //     bottom: 40px;
  //   `;
  //   const Item = styled.div`
  //     width: 158px;
  //     height: 158px;
  //     background-image: url(${(props: Props) => props.img});
  //   `

  return (
    <Section>
      <DndProvider backend={HTML5Backend}>
        {elements.map((item, i) => {
          return <DraggableItem key={i} data={item} />;
        })}
        <DropContainer onDropHandler={handleDrop}>
          {draggedElements.map((item, i) => (

              <DraggableItem key={i} data={item} />

          ))}
        </DropContainer>
      </DndProvider>
    </Section>
  );
}
