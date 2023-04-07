import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import * as icon from '@styled-icons/material-outlined';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size byDefault', () => {
    const { container } = renderWithTheme(
      <Button> Children test render </Button>
    );

    expect(
      screen.getByRole('button', {
        name: /Children test render/i,
      })
    ).toHaveStyleRule('height', '4rem');
    expect(container).toMatchSnapshot();
  });

  it('should render small button if size small', () => {
    const { container } = renderWithTheme(
      <Button size="small"> Children test render </Button>
    );
    expect(
      screen.getByRole('button', {
        name: /Children test render/i,
      })
    ).toHaveStyle({ height: '3rem', padding: '0.8rem', 'font-size': '1.2rem' });
    expect(container).toMatchSnapshot();
  });

  it('should render large button if size large', () => {
    const { container } = renderWithTheme(
      <Button size="large"> Children test render </Button>
    );
    expect(
      screen.getByRole('button', {
        name: /Children test render/i,
      })
    ).toHaveStyleRule('height', '5rem');
    expect(container).toMatchSnapshot();
  });

  it('should render full width version', () => {
    const { container } = renderWithTheme(
      <Button fullWidth> Children test render </Button>
    );
    expect(
      screen.getByRole('button', {
        name: /Children test render/i,
      })
    ).toHaveStyleRule('width', '100%');
    expect(container).toMatchSnapshot();
  });

  it('should render a icon version', () => {
    const { container } = renderWithTheme(
      <Button icon={<icon.AddShoppingCart data-testid="icon" />}>
        Buy now test
      </Button>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText(/buy now test/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        This button is an link element
      </Button>
    );

    const element = screen.getByRole('link', {
      name: /This button is an link element/i,
    });
    expect(element).toHaveAttribute('href', '/link');
  });

  it('should render Button as a button when not is passed', () => {
    renderWithTheme(<Button>This button is an button element</Button>);

    const element = screen.getByRole('button', {
      name: /This button is an button element/i,
    });

    expect(element).toBeInTheDocument();
  });

  it('should render Button with minimal styles', () => {
    renderWithTheme(<Button minimal>Inscreva-se</Button>);

    const element = screen.getByRole('button', {
      name: /Inscreva-se/i,
    });

    expect(element).toHaveStyleRule('background', 'none');
    expect(element).toHaveStyleRule('background', 'none', {
      modifier: ':hover',
    });
  });
});
