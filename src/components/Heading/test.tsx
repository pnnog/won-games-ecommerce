import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render white heading by default ', () => {
    renderWithTheme(<Heading> Renderizando Teste</Heading>);
    expect(
      screen.getByRole('heading', { name: /Renderizando teste/i })
    ).toHaveStyle({ color: '#FAFAFA' });
  });

  it('should render black heading when color is passed ', () => {
    renderWithTheme(<Heading color="black"> Renderizando Teste</Heading>);
    expect(
      screen.getByRole('heading', { name: /Renderizando teste/i })
    ).toHaveStyle({ color: '#030517' });
  });

  it('should render heading with leftLine ', () => {
    renderWithTheme(<Heading leftLine={true}> Renderizando Teste</Heading>);
    expect(
      screen.getByRole('heading', { name: /Renderizando teste/i })
    ).toHaveStyle({ 'padding-left': '0.8rem' });
  });

  it('should render heading with bottomLine ', () => {
    renderWithTheme(<Heading bottomLine={true}> Renderizando Teste</Heading>);
    expect(
      screen.getByRole('heading', { name: /Renderizando teste/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });
});
