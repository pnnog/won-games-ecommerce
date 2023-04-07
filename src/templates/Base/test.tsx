import Base from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    },
  };
});

describe('<Base />', () => {
  it('should render Base', () => {
    renderWithTheme(<Base> Children teste</Base>);

    expect(screen.getByTestId(/Mock Menu/i)).toBeInTheDocument();

    expect(screen.getByTestId(/Mock Footer/i)).toBeInTheDocument();
  });
});
