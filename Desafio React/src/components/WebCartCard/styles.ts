import styled from 'styled-components';
import { Image } from '../styles';

export const Container = styled.div`
  display: grid;
  width: 100%;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-400);
`;

export const Item = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 17.5rem minmax(auto, 21.75rem) minmax(auto, 21.75rem) 1.5rem;

  h2:nth-child(2) {
    min-width: 2.6875rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 17.5rem;
`;

export const MovieImage = styled(Image)`
  width: 5.6875rem;
  height: 7.125rem;
`;
