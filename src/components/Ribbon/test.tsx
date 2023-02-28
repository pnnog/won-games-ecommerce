import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the correctly text', () => {
    renderWithTheme(<Ribbon> Ribbon Test </Ribbon>);
    const element = screen.getByText(/Ribbon Test/i);
    expect(element).toBeInTheDocument();
  });

  it('should render Ribbon with primary color when not is passed', () => {
    renderWithTheme(<Ribbon> Ribbon Test </Ribbon>);
    const element = screen.getByText(/Ribbon Test/i);
    expect(element).toHaveStyleRule('background', '#F231A5');
  });

  it('should render Ribbon with primary color when color is primary', () => {
    renderWithTheme(<Ribbon color="primary"> Ribbon Test </Ribbon>);
    const element = screen.getByText(/Ribbon Test/i);
    expect(element).toHaveStyleRule('background', '#F231A5');
  });

  it('should render Ribbon with secondary color when color is secondary', () => {
    renderWithTheme(<Ribbon color="secondary"> Ribbon Test </Ribbon>);
    const element = screen.getByText(/Ribbon Test/i);
    expect(element).toHaveStyleRule('background', '#3CD3C1');
  });

  it('should render with normal size', () => {
    renderWithTheme(<Ribbon>Ribbon Test</Ribbon>);

    expect(screen.getByText(/Ribbon Test/i)).toHaveStyleRule(
      'height',
      '2.4rem'
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'padding',
      '0 2.4rem'
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'font-size',
      '1.2rem'
    );
  });

  it('should render with large size', () => {
    renderWithTheme(<Ribbon size="large"> Ribbon Test</Ribbon>);

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'height',
      '3.3rem'
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'padding',
      '0 4.0rem'
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'font-size',
      '1.4rem'
    );
  });

  it('should render with extra large size', () => {
    const { container } = renderWithTheme(
      <Ribbon size="extraLarge"> Ribbon Test</Ribbon>
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule('height', '4rem');

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'padding',
      '0 3.2rem'
    );

    expect(screen.getByText(/Ribbon test/i)).toHaveStyleRule(
      'font-size',
      '1.8rem'
    );

    expect(container).toMatchSnapshot();
  });
});
