import { ChangeEvent, ReactNode } from 'react';

export type TItem = { id: number; value: number; image: string };

export type TItems = {
  data: TItem;
  isSmall?: boolean;
};

export type TDropsContainerProps = {
  children: ReactNode;
  onDropHandler: (id: unknown) => void;
};

export type TRadioProps = {
  isChecked: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
};

export interface Props {
  isLong?: boolean;
  ascDesc?: boolean;
  img?: string;
}
