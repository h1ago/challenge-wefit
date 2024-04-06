import styled from 'styled-components';
import { Image } from '../styles';

export const Container = styled.div`
  display: grid;
  width: 100%;
  gap: 1.3125rem;
  padding-bottom: 1.3125rem;
  border-bottom: 1px solid var(--gray-400);
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const QuantityAndSubtotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const MovieImage = styled(Image)`
  width: 4.5rem;
  height: 5.125rem;
  background-size: initial;
  background-repeat: no-repeat;
  background-position: initial;
  background-size: 100%;
`;
