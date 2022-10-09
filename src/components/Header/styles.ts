import styled from 'styled-components';
import { ContentMaxWidth } from '../ContentMaxWidth/styles';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 16px;

  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.grey_900};
  z-index: 900;
`;

export const Content = styled(ContentMaxWidth)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  .logo {
    transition: 0.3s ease all;
    cursor: pointer;

    h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    &:hover {
      letter-spacing: 2px;
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      gap: 16px;

      li {
        font-weight: 500;
        font-size: 1rem;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.grey_400};
          transition: 0.3s ease all;

          &:hover {
            color: ${({ theme }) => theme.colors.white};
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
