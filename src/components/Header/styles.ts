import styled from 'styled-components';
import { ContentMaxWidth } from '../Content/styles';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 16px;

  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.grey_900};
`;

export const Content = styled(ContentMaxWidth)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  nav {
    ul {
      display: flex;
      list-style: none;
      gap: 16px;

      li {
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }
`;
