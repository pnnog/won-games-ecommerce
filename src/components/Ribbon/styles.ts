import styled, { css, DefaultTheme } from 'styled-components';
import { RibbonProps, RibbonColors } from '.';
import { darken } from 'polished';
import media from 'styled-media-query';

const WrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.small};
    height: 2.4rem;
    right: -2rem;

    &::before {
      top: 2.4rem;
      border-top-width: 0.7rem;
      border-right-width: 2rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.large};
    height: 3.3rem;
    right: -2.5rem;

    &::before {
      top: 3.3rem;
      border-top-width: 1rem;
      border-right-width: 2.6rem;
    }
  `,

  extraLarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    padding: 0 ${theme.spacings.medium};
    height: 4rem;
    right: -3rem;

    &::before {
      top: 4rem;
      border-top-width: 1.3rem;
      border-right-width: 3rem;
    }
  `,
};

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 5%;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    &::before {
      content: '';
      position: absolute;
      right: 0;

      border-style: solid;
      border-bottom-width: 1rem;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    ${!!color && WrapperModifiers.color(theme, color)}
    ${!!size && WrapperModifiers[size](theme)}

    ${media.lessThan('medium')`
      right:0;
      ::before{
        display:none; 
    
      }
    `}
  `}
`;
