import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const ColumnBlock = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('large')`
    grid-template-columns: repeat(6, 1fr);
    `}
  `}
`;

export const Column = styled.div``;
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xlarge};
  `}
`;
export const Content = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.xlarge};
  `}
`;
export const Icon = styled.figure``;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`;
