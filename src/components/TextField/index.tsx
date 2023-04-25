import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  disabled?: boolean;
  initialValue?: string;
  label?: string;
  labelFor?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInput,
  initialValue = '',
  label,
  labelFor,
  icon,
  disabled = false,
  iconPosition = 'left',
  error = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    !!onInput && onInput(value);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && (
          <S.IconWrapper role="icon" iconPosition={iconPosition}>
            {icon}
          </S.IconWrapper>
        )}
        <S.Input
          type="text"
          id={labelFor}
          value={value}
          onChange={handleOnChange}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
