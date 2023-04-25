import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type RadioValue = string | ReadonlyArray<string> | number | undefined;

export type RadioProps = {
  onCheck?: (value: RadioValue) => void;
  value?: RadioValue;
  label?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  onCheck,
  value,
  label,
  labelFor = '',
  labelColor = 'white',
  ...props
}: RadioProps) => {
  const handleOnChange = () => {
    onCheck!(value);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={handleOnChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Radio;
