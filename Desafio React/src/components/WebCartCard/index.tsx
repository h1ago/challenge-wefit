import type { CartItem } from '@/types';
import React from 'react';
import * as S from './styles';
import * as C from '../styles';
import i18n from 'i18next';
import { InputNumber } from '@/components';
import { useCartStore } from '@/hooks';
import { formatPrice } from '@/utils';
import TrashIcon from '@/assets/images/trash.svg';

interface Props {
  cardItem: CartItem;
}

const WebCartCard = ({ cardItem }: Props) => {
  const { incrementItemQuantity, decrementItemQuantity, removeItemFromCart } =
    useCartStore((state) => state);

  const { product, quantity } = cardItem;
  const subtotal = product.price * quantity;

  return (
    <S.Container>
      <S.Item>
        <C.Label>{i18n.t('cart.product')}</C.Label>
        <C.Label>{i18n.t('cart.quantity')}</C.Label>
        <C.Label>{i18n.t('cart.subtotal')}</C.Label>
      </S.Item>
      <S.Item>
        <S.InfoContainer>
          <S.MovieImage $img={product.image} />
          <div>
            <C.Title $marginbottom="0.5rem">{product.title}</C.Title>
            <C.Price>{formatPrice(product.price)}</C.Price>
          </div>
        </S.InfoContainer>
        <InputNumber
          value={quantity}
          increment={() => incrementItemQuantity(product.id)}
          decrement={() => decrementItemQuantity(product.id)}
        />
        <C.Price>{formatPrice(subtotal)}</C.Price>
        <C.Icon as={TrashIcon} onClick={() => removeItemFromCart(product.id)} />
      </S.Item>
    </S.Container>
  );
};

export default WebCartCard;
