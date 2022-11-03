import styled from '@emotion/styled';
import Portal from '../HOC/portal';

import Link from 'next/link';

const ModalContainer = styled.div`
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
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #2BD600;
  position: absolute;
  top: 460px;
  left: 310px;
  z-index: 100;
  width: 260px;
  height: 60px;
  font-family: 'CirceRoundedAlt';
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Modal = () => {
  return (
    <Portal>
      <ModalContainer>
        <Link href='/'>
          <Button>Заново</Button>
        </Link>
      </ModalContainer>
      <Overlay />
    </Portal>
  );
};

export default Modal;
