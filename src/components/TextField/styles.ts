import styled, { DefaultTheme, css } from 'styled-components';
import { TextFieldProps } from '.';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    border-radius: 0.2rem;

    border: 0.2rem solid ${theme.colors.lightGray};
    background-color: ${theme.colors.lightGray};

    :focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

type IconWrapperProps = Pick<TextFieldProps, 'iconPosition'>;

export const IconWrapper = styled.figure<IconWrapperProps>`
  ${({ theme, iconPosition }) => css`
    width: 2.2rem;
    height: 2.2rem;
    line-height: 1;

    color: ${theme.colors.gray};
    order: ${iconPosition === 'left' ? '0' : '1'};
    svg {
      height: 100%;
    }
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    width: 100%;
    line-height: ${theme.font.sizes.medium};

    :focus {
      outline: 0;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;

      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size${theme.font.sizes.xsmall}
  `}
`;

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Input}, ${Label}, ${IconWrapper} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      ::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${IconWrapper}, ${Label} {
      color: ${theme.colors.red};
    }
  `,
};
type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    display: flex;
    flex-direction: column;

    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.error(theme)}
  `}
`;
