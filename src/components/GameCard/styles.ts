import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    height: 100%;
    width: 100%;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    min-height: 14rem;
    width: 100%;

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );

    background-size: 80rem 14rem;
    animation: placeHolderShimmer 1s linear infinite forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeHolderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const BoxInfo = styled.div`
  width: calc(100% - 2.5rem);
  text-decoration: none;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const Developer = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `};
`;

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: -1rem;
    top: -0.5rem;

    svg {
      width: 2.5rem;
      cursor: pointer;
    }
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;

    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);

    cursor: pointer;
  `}
`;
