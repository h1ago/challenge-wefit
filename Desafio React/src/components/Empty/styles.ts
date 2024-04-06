import styled from 'styled-components';
import { Button as Btn } from '../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 37.25rem;
  padding: 4rem;
  border-radius: 0.25rem;
  background-color: var(--white);
  color: var(--text);
  text-align: center;

  @media only screen and (max-width: 360px) {
    height: 32.25rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 27.9375rem;
  height: 16.5625rem;
  border-bottom: 0.085rem solid var(--blue-800);

  svg {
    width: 11.125rem;
    height: 16.5rem;
  }
`;

export const Button = styled(Btn)`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
