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

const MobileCartCard = ({ cardItem }: Props) => {
  const { incrementItemQuantity, decrementItemQuantity, removeItemFromCart } =
    useCartStore((state) => state);

  const { product, quantity } = cardItem;
  const subtotal = product.price * quantity;

  return (
    <S.Container>
      <S.Item>
        <S.MovieImage $img={product.image} />
        <S.InfoContainer>
          <S.DetailsContainer>
            <C.Title $maxwidth="6.375rem">{product.title}</C.Title>
            <C.Price>{formatPrice(product.price)}</C.Price>
            <C.Icon
              as={TrashIcon}
              onClick={() => removeItemFromCart(product.id)}
            />
          </S.DetailsContainer>
          <S.QuantityAndSubtotal>
            <InputNumber
              value={quantity}
              increment={() => incrementItemQuantity(product.id)}
              decrement={() => decrementItemQuantity(product.id)}
            />
            <div>
              <C.Label size="xs">{i18n.t('cart.subtotal')}</C.Label>
              <C.Price>{formatPrice(subtotal)}</C.Price>
            </div>
          </S.QuantityAndSubtotal>
        </S.InfoContainer>
      </S.Item>
    </S.Container>
  );
};

export default MobileCartCard;
