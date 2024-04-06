import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 65.5rem;
  height: 3.5rem;
  padding: 1rem 3.5rem 1.125rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--white);
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Open Sans';
  color: var(--text);

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--blue-400);
  }

  ::placeholder {
    color: var(--gray-200);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--gray-300);
`;
