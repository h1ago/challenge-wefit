import styled from 'styled-components';
import { Button } from '@/components/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background-color: var(--white);
  color: var(--text);

  @media only screen and (max-width: 690px) {
    gap: 1.3125rem;
    padding: 1rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 690px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  @media only screen and (max-width: 690px) {
    justify-content: space-between;
  }
`;

export const FinishButton = styled(Button)`
  height: 2.125rem;
  font-size: 0.875rem;

  @media only screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const Price = styled.p`
  width: 8.125rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;

  @media only screen and (max-width: 690px) {
    width: auto;
  }
`;
