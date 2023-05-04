import { screen } from '@testing-library/react';

import GameInfo from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

const props = {
  title: 'Borderlands 3',
  description: 'test description',
  price: '123',
};

describe('<GameInfo />', () => {
  it('should render GameInfo', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(screen.getByRole('heading', { name: /Borderlands 3/i })).toHaveStyle(
      {
        color: theme.colors.black,
      }
    );

    expect(screen.getByText('test description')).toHaveStyle({
      color: theme.colors.gray,
    });
  });

  it('should render button with icon and price', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(screen.getByRole('button', { name: /Add to cart/i }));
    expect(screen.getByRole('button', { name: /Wishlist/i }));
    expect(screen.getByText('$123')).toHaveStyle({
      background: 'rgb(60, 211, 193)',
    });
  });
});
