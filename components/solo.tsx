import styled from '@emotion/styled';
import img from '../images/48820661.png';

export interface Props {
  isLong?: boolean;
  ascDesc?: boolean;
  img?: string;
}

export default function Solo() {
  const Section = styled.section`
    background-image: url('https://i.ibb.co/yRqswvT/4882066-1.png');
    display: flex;
    position: relative;
    /* background-color: url(${img as unknown as string}); */
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

  const Checkbox = styled.div`
    display: flex;
    margin: ${(props: Props) => (props.isLong ? '0 84px 0' : '0 128px 0')};
    justify-content: space-around;
  `;

  const Input = styled.input`
    -webkit-appearance: none;

    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 23px;
    height: 23px;
    background-clip: content-box;
    border-radius: 23px;
    background-color: #fff;
    margin-left: 15px;
    margin-right: 15px;

    &:checked {
      background-color: #104987;
      z-index: 1;
    }
  `;

  const Group = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Label = styled.label`
    margin-bottom: 8px;
    text-align: center;
  `;

  const Stripe = styled.div`
    width: ${(props: Props) => (props.isLong ? '531px' : '366px')};
    height: 21px;
    border-radius: 23px;
    background-color: #ffd748;
    position: absolute;
    top: ${(props: Props) => (props.isLong ? '405px' : '238px')};
    left: ${(props: Props) => (props.isLong ? '223px' : '305px')};
  `;

  const ButtonsGroup = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Button = styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    width: ${(props: Props) => (props.ascDesc ? 'auto' : '260px')};
    height: ${(props: Props) => (props.ascDesc ? '44px' : '60px')};
    background-color: ${(props: Props) =>
      props.ascDesc ? '#FFD748' : '#38DF7A'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 0 24px;
    margin-top: 73px;
    margin-left: ${(props: Props) => (props.ascDesc ? '0' : '220px')};
    margin-right: ${(props: Props) => (props.ascDesc ? '0' : '220px')};

    &:first-child {
      margin-right: 36px;
    }
  `;

  return (
    <Section>
      <Div>
        <H3>Количество предметов</H3>
        <Stripe />
        <Checkbox>
          <Group>
            <Label>2</Label>
            <Input type='checkbox' name='2' checked />
          </Group>
          <Group>
            <Label>3</Label>
            <Input type='checkbox' name='3' />
          </Group>
          <Group>
            <Label>4</Label>
            <Input type='checkbox' name='4' />
          </Group>
          <Group>
            <Label>5</Label>
            <Input type='checkbox' />
          </Group>
        </Checkbox>
        <H3>Значения</H3>
        <Stripe isLong />
        <Checkbox isLong>
          <Group>
            <Label>A</Label>
            <Input type='checkbox' name='1' checked />
          </Group>
          <Group>
            <Label>9</Label>
            <Input type='checkbox' name='2' />
          </Group>
          <Group>
            <Label>19</Label>
            <Input type='checkbox' name='3' />
          </Group>
          <Group>
            <Label>50</Label>
            <Input type='checkbox' name='4' />
          </Group>
          <Group>
            <Label>99</Label>
            <Input type='checkbox' />
          </Group>
          <Group>
            <Label>999</Label>
            <Input type='checkbox' />
          </Group>
        </Checkbox>
        <ButtonsGroup>
          <Button ascDesc>По возрастанию</Button>
          <Button ascDesc>По убыванию</Button>
        </ButtonsGroup>
        <Button>Играть</Button>
      </Div>
    </Section>
  );
}
