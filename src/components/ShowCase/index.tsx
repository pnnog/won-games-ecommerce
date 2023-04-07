import * as S from './styles';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';

export type ShowCaseProps = {
  heading?: string;
  games?: GameCardProps[];
  highlight?: HighlightProps;
  color?: 'black' | 'white';
};
const ShowCase = ({ heading, games, highlight, color }: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && (
      <Heading size="medium" leftLine lineColor="secondary">
        {heading}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
);

export default ShowCase;
