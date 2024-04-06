import React from 'react';
import * as S from './styles';
import MinusIcon from '@/assets/images/minus.svg';
import PlusIcon from '@/assets/images/plus.svg';

interface Props {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const InputNumber = ({ value, increment, decrement }: Props) => {
  return (
    <S.Container>
      <S.Icon as={MinusIcon} onClick={decrement} disabled={value === 1} />
      <S.Input type="number" min={1} value={value} readOnly />
      <S.Icon as={PlusIcon} onClick={increment} />
    </S.Container>
  );
};

export default InputNumber;
