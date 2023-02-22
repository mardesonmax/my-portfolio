import styled from 'styled-components';
import { ContentMaxWidth } from '~/components/ContentMaxWidth/styles';

export const Container = styled.section`
  padding: 0 16px;
  display: flex;
  justify-content: center;
`;

export const Content = styled(ContentMaxWidth)`
  padding: 116px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 40px;

    .contact,
    .contact a {
      display: flex;
      gap: 8px;
      color: ${({ theme }) => theme.colors.white};
      align-items: center;

      align-self: flex-start;

      span {
        font-size: 1rem;
      }

      .icon {
        background: ${({ theme }) => theme.colors.grey_900};
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease all;
        border: 4px solid transparent;

        svg {
          font-size: 20px;
        }
      }

      &:hover {
        .icon {
          background: ${({ theme }) => theme.colors.white};
          border-color: ${({ theme }) => theme.colors.grey_400};

          svg {
            color: ${({ theme }) => theme.colors.grey_700};
          }
        }
      }
    }
  }
`;
