import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  icon?: JSX.Element;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};
const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span> {children} </span>}
  </S.Wrapper>
);

export default Button;
