import styled from 'styled-components';
import ShoppingBag from '@/assets/images/shoppingBag.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  height: 5.5rem;
  color: var(--white);
`;

export const TitleLogo = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1875rem;

  h2 {
    font-size: 0.875rem;
    font-weight: 600;

    @media only screen and (max-width: 360px) {
      display: none;
    }
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray-400);
  }
`;

export const ShoppingBagIcon = styled(ShoppingBag)`
  width: 1.5rem;
  fill: var(--white);
`;
