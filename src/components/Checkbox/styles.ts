import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

//Alinhando input e label
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

//Estilizando input e alinhando checkmark
export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: 0;
    appearance: none;
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.darkGray};
    height: 1.8rem;
    width: 1.8rem;
    cursor: pointer;
    transition: background border 1s;
    position: relative;

    //checkmark
    :before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;

      position: absolute;
      top: 0.1rem;
      transform: rotate(45deg);

      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;

      transition: ${theme.transition.fast};
      opacity: 0;
    }

    :checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      :before {
        opacity: 1;
      }
    }

    :focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

type LabelProps = Pick<CheckboxProps, 'labelColor'>;

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1;
  `}
`;
