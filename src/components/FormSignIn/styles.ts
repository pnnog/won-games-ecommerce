import styled, { css } from 'styled-components';

export const ForgotLink = styled.a`
  ${({ theme }) => css`
    align-self: end;
    cursor: pointer;
    margin-bottom: calc(${theme.spacings.medium}*2);

    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    color: ${theme.colors.black};
  `}
`;
