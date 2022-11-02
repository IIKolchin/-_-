import styled from '@emotion/styled';
import Radio from './radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { setValueCountItems, setValueValues } from '../store/radioSlice';
import { setButtonAsc, setButtonDesc } from '../store/buttonsSlice';
import Link from 'next/link';

export interface Props {
  isLong?: boolean;
  ascDesc?: boolean;
  img?: string;
}

export default function Solo() {
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

  const Section = styled.section`
    background-image: url('https://i.ibb.co/yRqswvT/4882066-1.png');
    display: flex;
    position: relative;
    background-size: cover;
    width: 980px;
    height: 810px;
    margin-bottom: 91px;
  `;

  const Div = styled.div`
    background-color: #fff;
    width: 699px;
    height: 660px;
    margin: 91px auto 59px;
    border-radius: 40px;

    &::before {
      content: '';
      position: absolute;
      top: 91px;
      left: 139px;
      right: 140px;
      bottom: 59px;
      border-radius: 40px;
      padding: 20px;
      background: linear-gradient(to bottom, #7f75f0, #101f32);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  `;

  const H3 = styled.p`
    margin-top: 57px;
    text-align: center;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 16px;
  `;

  const RadioContainer = styled.div`
    display: flex;
    width: ${(props: Props) => (props.isLong ? '531px' : '366px')};
    margin: ${(props: Props) => (props.isLong ? '0 auto 0' : '0 auto 0')};
    justify-content: space-between;
  `;

  const Stripe = styled.div`
    width: ${(props: Props) => (props.isLong ? '526px' : '366px')};
    height: 22px;
    z-index: 9;
    border-radius: 23px;
    background-color: #ffd748;
    position: absolute;
    top: ${(props: Props) => (props.isLong ? '400px' : '235px')};
    left: ${(props: Props) => (props.isLong ? '223px' : '305px')};
  `;

  const ButtonsGroup = styled.div`

    display: grid;
    /* grid-template-columns: 1fr 1fr;
  grid-template-rows:  1fr 1fr; */
    grid-template-areas:
      '. a b .'
      '.  c c .';
    /* justify-content: center; */
    /* justify-items: center; */
  `;

  const Button = styled.button`
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    z-index: 10;
    line-height: 39px;
    width: ${(props: Props) => (props.ascDesc ? 'auto' : '260px')};
    height: ${(props: Props) => (props.ascDesc ? '44px' : '60px')};
    background-color: ${(props: Props) =>
      props.ascDesc ? '#FFD748' : '#38DF7A'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    /* padding: 0 24px; */
    margin-top: 73px;
    margin-left: ${(props: Props) => (props.ascDesc ? '0' : '220px')};
    margin-right: ${(props: Props) => (props.ascDesc ? '0' : '220px')};

    &:first-of-type {
      margin-left: 80px;
      width: 271px;
      grid-area: a;
    }

    &:nth-of-type(2) {
      width: 234px;
      margin-right: 60px;
      grid-area: b;
    }
    &:nth-of-type(3) {
      color: #fff;
      grid-area: c;
    }
  `;

  function chengeValueCountItems(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setValueCountItems(e.target.value));
  }
  function chengeValueValues(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setValueValues(e.target.value));
  }

  const counts = [
    { name: '2', checked: true },
    { name: '3', checked: false },
    { name: '4', checked: false },
    { name: '5', checked: false },
  ];

  const values = [
    { name: 'A', checked: true },
    { name: '9', checked: false },
    { name: '19', checked: false },
    { name: '50', checked: false },
    { name: '99', checked: false },
    { name: '999', checked: false },
  ];

  const play = () => {
    console.log('play');
  };

  const ascending = () => {
    dispatch(setButtonAsc(true));
    dispatch(setButtonDesc(false));
  };

  const descending = () => {
    dispatch(setButtonDesc(true));
    dispatch(setButtonAsc(false));
  };

  return (
    <Section>
      <Div>
        <H3>Количество предметов</H3>
        <Stripe />
        <RadioContainer>
          {counts.map((item, i) => (
            <Radio
              key={i}
              isChecked={valueCountItems === item.name}
              onChange={chengeValueCountItems}
              value={item.name}
              id={item.name}
              name='count'
            />
          ))}
        </RadioContainer>
        <H3>Значения</H3>
        <Stripe isLong />
        <RadioContainer isLong>
          {values.map((item, i) => (
            <Radio
              key={i}
              isChecked={valueValues === item.name}
              onChange={chengeValueValues}
              value={item.name}
              id={item.name}
              name='values'
            />
          ))}
        </RadioContainer>
        <ButtonsGroup>
          <Button onClick={ascending} disabled={isButtonAsc} ascDesc>
            По возрастанию
          </Button>
          <Button onClick={descending} disabled={isButtonDesc} ascDesc>
            По убыванию
          </Button>
          <Button><Link href='/game'>Играть</Link></Button>
        </ButtonsGroup>
  
          
          
          
      
      </Div>
    </Section>
  );
}
