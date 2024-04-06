import styled, { css } from 'styled-components';

export const Image = styled.div<{ $img: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${({ $img }) => $img});
`;

export const Button = styled.button`
  width: 10.8125rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--blue-400);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

export const Label = styled.h2<{ size?: 'xs' | 'md' }>`
  font-size: ${({ size }) => (size === 'xs' ? '0.75rem' : '0.875rem')};
  font-weight: 700;
  color: var(--gray-400);
  text-transform: uppercase;
`;

export const Title = styled.h2<{
  size?: 'xs' | 'md';
  $maxwidth?: string;
  $marginbottom?: string;
}>`
  font-size: ${({ size }) => (size === 'xs' ? '0.75rem' : '0.875rem')};
  font-weight: 700;

  ${({ $maxwidth }) =>
    $maxwidth &&
    css`
      max-width: ${$maxwidth};
    `};

  ${({ $marginbottom }) =>
    $marginbottom &&
    css`
      margin-bottom: ${$marginbottom};
    `};
`;

export const Icon = styled.svg`
  width: 1.125rem;
  height: 1.125rem;
  fill: var(--blue-400);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const MessageText = styled.h1`
  max-height: 2.1875rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
`;
