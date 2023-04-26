import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';
import Logo from 'components/Logo';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  ${media.lessThan('medium')`
      grid-template-columns: 1fr;

    `}
`;
export const BannerBlock = styled.section`
  ${({ theme }) => css`
    position: relative;
    background: url('/img/auth-bg.png') no-repeat;
    background-position: center center;
    background-size: cover;

    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${HeadingStyles.Wrapper} {
      font-size: 5.2rem;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
    }

    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.8);
    }

    ${media.lessThan('medium')`
      display:none;

    `}
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};

    color: ${theme.colors.white};
  `}
`;

export const BannerSubtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    > strong {
      color: ${theme.colors.primary};
    }
  `}
`;
export const BannerFooter = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    align-self: end;
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;
