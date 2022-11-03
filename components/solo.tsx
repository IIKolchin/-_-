import styled from '@emotion/styled';
import Radio from './radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { setValueCountItems, setValueValues } from '../store/radioSlice';
import { setButtonAsc, setButtonDesc } from '../store/buttonsSlice';
import Link from 'next/link';
import { setTheme } from '../store/themeSlice';
import { getRandom } from '../utils';
import { Props } from '../types';


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

  &:nth-of-type(2) {
    margin-top: 53px;
  }
`;
const RadioContainer = styled.div`
  display: flex;
  width: ${(props: Props) => (props.isLong ? '531px' : '366px')};
  margin: ${(props: Props) => (props.isLong ? '0 auto 0' : '0 auto 0')};
  justify-content: space-between;
`;

const Stripe = styled.div`
  width: ${(props: Props) => (props.isLong ? '524px' : '366px')};
  height: 22px;
  z-index: 9;
  border-radius: 23px;
  background-color: #ffd748;
  position: absolute;
  top: ${(props: Props) => (props.isLong ? '401px' : '237px')};
  left: ${(props: Props) => (props.isLong ? '223px' : '306px')};
`;

const ButtonsGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  z-index: 10;
  height: 44px;
  padding: 0 24px;
  line-height: 39px;
  background-color: #ffd748;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-top: 73px;

  &:first-of-type {
    margin-left: 80px;
    margin-right: 36px;
    width: 271px;
  }

  &:nth-of-type(2) {
    width: 234px;
    margin-right: 60px;
  }
`;

const Play = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #38df7a;
  position: relative;
  z-index: 100;
  width: 260px;
  height: 60px;
  margin: 100px 220px 52px;
  font-family: 'Helvetica';
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Solo = () => {
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

  const play = async () => {
    await dispatch(setTheme(getRandom(['1', '2', '3', '4'])));
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
          <Button onClick={ascending} disabled={isButtonAsc}>
            По возрастанию
          </Button>
          <Button onClick={descending} disabled={isButtonDesc}>
            По убыванию
          </Button>
        </ButtonsGroup>

        <Link onClick={play} href='/game'>
          <Play>Играть</Play>
        </Link>
      </Div>
    </Section>
  );
}

export default Solo;