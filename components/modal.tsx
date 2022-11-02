import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import Portal from '../HOC/portal';
import Button from './button';
import Link from 'next/link';

const Modal = () => {
  const Modal = styled.div`
    background-image: url('https://svgshare.com/i/nmP.svg');
    width: 834px;
    height: 570px;
    z-index: 100;
    position: absolute;
    top: 90px;
    left: 60px;
  `;
  const Overlay = styled.div`
    z-index: 9;
    background: rgba(32, 21, 54, 0.6);
    opacity: 60%;
    position: fixed;
    height: 810px;
    width: 980px;
    top: 0;
    left: 0;
  `;

  return (
    <Portal>
      <Modal >
        <Button win><Link href='/'>Заново</Link></Button>
      </Modal>
      <Overlay />
    </Portal>
  );
};

export default Modal;
