import Button from '../Button';
import * as S from './styles';

export type HighlightProps = {
  floatImage?: string;
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({
  floatImage,
  backgroundImage,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  alignment = 'right',
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle> {subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
);

export default Highlight;
