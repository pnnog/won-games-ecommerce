import { screen } from '@testing-library/react';

import Auth from '.';
import { renderWithTheme } from 'utils/tests/helpers';

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="heading mock"></div>;
    },
  };
});

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="logo mock"></div>;
    },
  };
});

// jest.mock('components/Button', () => {
//   return {
//     __esModule: true,
//     default: () => {
//       return <div data-testid="button mock"></div>;
//     },
//   };
// });

// jest.mock('components/TextField', () => {
//   return {
//     __esModule: true,
//     default: () => {
//       return <div data-testid="text field mock"></div>;
//     },
//   };
// });

describe('<Auth />', () => {
  it('should render Auth and components integration', () => {
    renderWithTheme(
      <Auth ContentTitle="heading">
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByTestId('heading mock')).toHaveLength(2);
    expect(screen.getAllByTestId('logo mock')).toHaveLength(2);
    // expect(screen.getByTestId('button mock'));
    // expect(screen.getByTestId('text field mock'));
  });
});
