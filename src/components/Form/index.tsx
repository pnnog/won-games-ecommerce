import styled, { css } from 'styled-components';
import { darken } from 'polished';

import * as TextFieldStyles from 'components/TextField/styles';
import * as ButtonStyles from 'components/Button/styles';

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${ButtonStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
export const FormLink = styled.div`
  ${({ theme }) => css`
    align-self: end;
    align-self: center;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border ${theme.transition.fast};

      :hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;
