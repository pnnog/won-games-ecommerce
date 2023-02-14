import { screen } from '@testing-library/react';
import Logo from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import 'jest-styled-components';

describe('<Logo />', () => {
  it('should render Logo with white label byDefault', () => {
    //renderizar o componente
    renderWithTheme(<Logo />);

    //selecionar o componente
    //comparar o componente com o que buscamos
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render Logo with black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render Logo with normal size when size is default ', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should render a bigger logo when size is large', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a bigger logo without text on mobile if hideOnMobile', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    );
  });
});