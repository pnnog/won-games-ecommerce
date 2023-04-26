import { screen } from '@testing-library/react';

import FormSignUp from '.';
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

describe('<FormSignUp />', () => {
  it('should render FormSignUp', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getAllByTestId('text field mock')).toHaveLength(3);
    expect(screen.getByTestId('button mock')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Sign in/ })).toHaveAttribute(
      'href',
      '/sign-in'
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
