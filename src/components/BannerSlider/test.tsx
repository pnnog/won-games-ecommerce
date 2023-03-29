import 'match-media-mock.js';

import { renderWithTheme } from 'utils/tests/helpers';
import BannerSlider from '.';
import { BannerProps } from 'components/Banner';
import { screen } from '@testing-library/react';

const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
  },
];

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
