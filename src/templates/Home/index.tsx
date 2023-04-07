import ShowCase from 'components/ShowCase';
import BannerSlider from 'components/BannerSlider';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Base from 'templates/Base';

import * as S from './styles';
import Container from 'components/Container';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighLight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upComingGames: GameCardProps[];
  upComingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};
const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighLight,
  upComingGames,
  upComingHighlight,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase heading="News" games={newGames} color="black" />
    </S.SectionNews>
    <ShowCase
      heading="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
    />
    <ShowCase heading="Upcoming" games={upComingGames} />
    <ShowCase highlight={upComingHighlight} games={upComingGames} />
    <ShowCase
      heading="Free Games"
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
);

export default Home;
