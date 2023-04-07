import Home, { HomeTemplateProps } from 'templates/Home';
import MockBanners from 'components/BannerSlider/mock';
import MockGames from 'components/GameCardSlider/mock';
import MockHighLight from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  /* Recebendo valores das props e passando para as página */
  return (
    <>
      <Home {...props} />
    </>
  );
}

export function getServerSideProps() {
  return {
    /* Passando valores para as props e enviando para a página*/
    props: {
      banners: MockBanners,
      newGames: MockGames,
      mostPopularGames: MockGames,
      mostPopularHighLight: MockHighLight,
      upComingGames: MockGames,
      upComingHighlight: MockHighLight,
      freeGames: MockGames,
      freeHighlight: MockHighLight,
    },
  };
}
