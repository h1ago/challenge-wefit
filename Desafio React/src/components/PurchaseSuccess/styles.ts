import styled from 'styled-components';

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

  svg {
    width: 18.4375rem;
    height: 19.1875rem;
  }

  @media only screen and (max-width: 360px) {
    height: 32.25rem;

    svg {
      width: 14.875rem;
      height: 15.5rem;
    }
  }
`;
