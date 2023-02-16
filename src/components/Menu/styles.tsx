import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

type FullMenuProps = {
  isOpen: boolean;
};

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
