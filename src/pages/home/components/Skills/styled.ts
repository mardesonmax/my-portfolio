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

  .skills {
    margin-top: 48px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;

    .skill {
      .image {
        background: ${({ theme }) => theme.colors.grey_900};
        border-radius: 12px;
        overflow: hidden;
        width: 80px;
        height: 80px;
      }

      span {
        display: block;
        margin-top: 8px;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
