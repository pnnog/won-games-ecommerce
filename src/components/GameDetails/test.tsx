import { render, screen } from '@testing-library/react';

import GameDetails from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<GameDetails />', () => {
  it('should render GameDetails', () => {
    renderWithTheme(<GameDetails />);

    expect(
      screen.queryByRole('heading', { name: /Game Details/i })
    ).toHaveStyleRule('display', 'none', { media: '(max-width:768px)' });
  });
});
