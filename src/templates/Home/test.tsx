import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

import MockBanners from 'components/BannerSlider/mock';
import MockHighlight from 'components/Highlight/mock';
import MockGames from 'components/GameCardSlider/mock';

const props = {
  banners: [MockBanners[0]],
  newGames: [MockGames[0]],
  mostPopularGames: [MockGames[0]],
  mostPopularHighLight: MockHighlight,
  upComingGames: [MockGames[0]],
  upComingHighlight: MockHighlight,
  freeGames: [MockGames[0]],
  freeHighlight: MockHighlight,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Follow Us/i })
    ).toBeInTheDocument();
  });

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument();
  });
});
