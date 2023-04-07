import 'match-media-mock.js';

import { renderWithTheme } from 'utils/tests/helpers';
import BannerSlider from '.';
import { screen } from '@testing-library/react';
import items from './mock';

describe('<BannerSlider />', () => {
  it('should render VerticalSlide', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);
    expect(
      screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })
    ).toBeInTheDocument();
  });
});
