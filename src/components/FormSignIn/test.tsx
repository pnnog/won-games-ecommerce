import { screen } from '@testing-library/react';

import FormSignIn from '.';
import { renderWithTheme } from 'utils/tests/helpers';

//mockar componentes externos e testar
//testar links

jest.mock('components/TextField', () => ({
  __esModule: true,
  default: () => <div data-testid="text field mock"></div>,
}));

jest.mock('components/Button', () => ({
  __esModule: true,
  default: () => <div data-testid="button mock"></div>,
}));

describe('<FormSignIn />', () => {
  it('should render FormSignIn', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getAllByTestId('text field mock')).toHaveLength(2);
    expect(screen.getByTestId('button mock')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /forgot your password?/i })
    ).toHaveAttribute('href', '#');

    expect(screen.getByRole('link', { name: /Sign up/ })).toHaveAttribute(
      'href',
      '/sign-up'
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
