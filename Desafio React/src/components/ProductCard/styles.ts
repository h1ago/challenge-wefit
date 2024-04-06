import styled, { css } from 'styled-components';
import { Image } from '../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 21.125rem;
  height: 20.25rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: var(--white);
  color: var(--text);
`;

export const MovieImage = styled(Image)`
  width: 9.1875rem;
  height: 11.75rem;
`;

export const Button = styled.button<{ $highlight: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--blue-400);
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'Open Sans';
  color: var(--white);
  text-transform: uppercase;
  cursor: pointer;

  ${({ $highlight }) =>
    $highlight &&
    css`
      background-color: var(--green-400);
    `};
`;

export const Icon = styled.svg`
  width: 0.85rem;
  height: 0.85rem;
  margin-right: 0.2125rem;
  fill: var(--white);
`;

export const Quantity = styled.span`
  margin-right: 0.75rem;
`;
