import styled, { css } from 'styled-components';

export const Wrapper = styled.article``;

export const ImageBox = styled.div``;

export const BoxInfo = styled.div``;

export const Title = styled.h2``;

export const Developer = styled.h3``;

export const FavButton = styled.div``;

export const BuyBox = styled.div``;

export const Price = styled.h4``;

export const AltPrice = styled.h4`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`;
