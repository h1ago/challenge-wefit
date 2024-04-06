import type { Product } from '@/types';
import React from 'react';
import * as S from './styles';
import * as C from '../styles';
import i18n from 'i18next';
import { useCartStore } from '@/hooks';
import { formatPrice } from '@/utils';
import ShoppingCart from '@/assets/images/shoppingCart.svg';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addItemToCart, getCartItemCount } = useCartStore((state) => state);

  const quantity = getCartItemCount(product.id);
  const isBtnHighlight = quantity > 0;

  return (
    <S.Container>
      <S.MovieImage $img={product.image} />
      <C.Title size="xs">{product.title}</C.Title>
      <C.Price>{formatPrice(product.price)}</C.Price>
      <S.Button
        $highlight={isBtnHighlight}
        onClick={() => addItemToCart(product)}
      >
        <S.Icon as={ShoppingCart} />
        <S.Quantity>{quantity}</S.Quantity>

        {i18n.t('addProductToCart')}
      </S.Button>
    </S.Container>
  );
};

export default ProductCard;
