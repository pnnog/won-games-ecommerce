import styled, { DefaultTheme, css } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColorProps } from '.';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  leftLine: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  bottomLine: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      width: 5rem;
    }
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, leftLine, bottomLine, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${size && wrapperModifiers[size](theme)}

    ${!!leftLine && lineColor && wrapperModifiers.leftLine(theme, lineColor!)}

    ${!!bottomLine &&
    lineColor &&
    wrapperModifiers.bottomLine(theme, lineColor!)}
  `}
`;
