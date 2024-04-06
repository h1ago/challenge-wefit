import React from 'react';
import * as S from './styles';
import i18n from 'i18next';
import { useCartStore } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TitleLogo onClick={() => navigate('/')}>
        {i18n.t('header.logo')}
      </S.TitleLogo>
      <S.Cart onClick={() => navigate('/cart')}>
        <S.CartInfo>
          <h2>{i18n.t('header.myCart')}</h2>
          <span>{i18n.t('header.itemCart', { count: cartItems.length })}</span>
        </S.CartInfo>
        <S.ShoppingBagIcon />
      </S.Cart>
    </S.Container>
  );
};

export default Header;
