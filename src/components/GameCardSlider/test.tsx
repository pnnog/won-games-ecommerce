import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';
import items from './mock';

import GameCardSlider from '.';

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i).parentNode).toHaveStyle({
      color: '#FAFAFA',
    });
    expect(screen.getByLabelText(/Next games/i).parentNode).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
