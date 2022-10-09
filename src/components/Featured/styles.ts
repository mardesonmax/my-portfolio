import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey_400};
    margin-top: 8px;
  }

  @media (max-width: 767.98px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 575.98px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;
