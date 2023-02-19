import * as S from './styles';

export type LineColorProps = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  size?: 'small' | 'medium';
  leftLine?: boolean;
  bottomLine?: boolean;
  lineColor?: LineColorProps;
};

const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  leftLine = false,
  bottomLine = false,
  lineColor = 'primary',
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    leftLine={leftLine}
    bottomLine={bottomLine}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
