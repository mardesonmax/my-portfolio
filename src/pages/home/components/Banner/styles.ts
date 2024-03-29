import styled from 'styled-components';
import { ContentMaxWidth } from '~/components/ContentMaxWidth/styles';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  background: ${({ theme }) => theme.colors.grey_900};
  min-height: 80vh;
`;

export const Content = styled(ContentMaxWidth)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .user-text {
    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      display: block;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grey_400};
    }
  }

  .user-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.grey_100};
  }

  @media (max-width: 991.98px) {
    flex-wrap: wrap;
    justify-content: center;

    .user-text {
      order: 12;
      margin-top: 32px;
      flex: 100%;
    }
    .user-image {
      order: 10;
    }
  }

  @media (max-width: 767.98px) {
    .user-text {
      h1 {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: 575.98px) {
    .user-text {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
