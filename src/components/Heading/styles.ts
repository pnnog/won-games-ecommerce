import styled, { DefaultTheme, css } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

const wrapperModifiers = {
  leftLine: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  bottomLine: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
      content: '';

      width: 5rem;
    }
  `,
};
export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, leftLine, bottomLine }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}

    ${leftLine && wrapperModifiers.leftLine(theme)}

    ${bottomLine && wrapperModifiers.bottomLine(theme)}
  `}
`;
