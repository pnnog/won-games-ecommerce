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

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>;
    },
  };
});

jest.mock('components/Banner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5);

    expect(screen.getByTestId('Mock Banner')).toBeInTheDocument();
  });
});
