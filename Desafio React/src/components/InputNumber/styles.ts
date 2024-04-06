import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6875rem;
`;

export const Icon = styled.svg<{ disabled?: boolean }>`
  width: 1.125rem;
  height: 1.125rem;
  fill: var(--blue-400);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
    `};
`;

export const Input = styled.input`
  width: 100%;
  max-width: 3.875rem;
  height: 1.625rem;
  border: 1px solid var(--gray-100);
  border-radius: 0.25rem;
  background-color: var(--white);
  padding-inline: 0.1875rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Open Sans';
  color: var(--text);

  &:focus {
    outline: none;
  }
`;
