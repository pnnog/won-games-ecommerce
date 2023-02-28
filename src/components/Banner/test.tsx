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

  it('should render banner with ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="20% OFF"
        ribbonSize="small"
        ribbonColor="primary"
      />
    );

    const element = screen.getByText(/20% OFF/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule('height', '2.4rem');
    expect(element).toHaveStyleRule('background', '#F231A5');
  });
});
