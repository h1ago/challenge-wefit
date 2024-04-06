import React, { useState } from 'react';
import * as S from './styles';
import * as C from '@/components/styles';
import i18n from 'i18next';
import {
  Empty,
  PurchaseSuccess,
  WebCartCard,
  MobileCartCard,
} from '@/components';
import { useMediaQuery } from 'react-responsive';
import { useCartStore } from '@/hooks';
import { formatPrice } from '@/utils';

const Cart = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 690 });
  const { cartItems, clearCart } = useCartStore((state) => state);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0,
  );

  const handleClick = () => {
    setPurchaseCompleted(true);
    clearCart();
  };

  if (!cartItems.length && !purchaseCompleted)
    return <Empty isReload={false} />;

  if (purchaseCompleted) return <PurchaseSuccess />;

  return (
    <S.Container data-testid="div-cart">
      {cartItems.map((item, i) =>
        isTabletOrMobile ? (
          <MobileCartCard key={i} cardItem={item} />
        ) : (
          <WebCartCard key={i} cardItem={item} />
        ),
      )}

      <S.Footer>
        <S.FinishButton onClick={handleClick}>
          {i18n.t('cart.placeOrder')}
        </S.FinishButton>
        <S.TotalContainer>
          <C.Label>{i18n.t('cart.total')}</C.Label>
          <S.Price>{formatPrice(orderTotal)}</S.Price>
        </S.TotalContainer>
      </S.Footer>
    </S.Container>
  );
};

export default Cart;
