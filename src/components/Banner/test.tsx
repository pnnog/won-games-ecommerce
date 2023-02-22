import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy Now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);
    //img
    expect(
      screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();
    //title
    expect(screen.getByRole('heading', { name: /Defy death/i }));
    //subtitle
    expect(
      screen.getByRole('heading', {
        name: /Play the new CrashLands season/i,
      })
    );
    //button with label and link
    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    );

    expect(container).toMatchSnapshot();
  });
});
