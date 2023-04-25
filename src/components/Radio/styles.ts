import styled, { css } from 'styled-components';
import { RadioProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.primary};
    line-height: 1;
    outline: 0;
    position: relative;

    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    background: transparent;

    height: 1.8rem;
    width: 1.8rem;

    :before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.8rem;
      height: 0.8rem;
      background: ${theme.colors.primary};
      border-radius: 50%;
      opacity: 0;
      transition: opacity ${theme.transition.fast};
    }

    :checked {
      :before {
        opacity: 1;
      }
    }

    :focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

type LabelProps = Pick<RadioProps, 'labelColor'>;
export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
