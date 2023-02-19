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

  it('should render leftLine with primary line color when lineColor is not passed', () => {
    renderWithTheme(<Heading leftLine> Heading test</Heading>);
    const heading = screen.getByRole('heading', {
      name: /Heading test/i,
    });

    expect(heading).toHaveStyleRule('border-left', '0.7rem solid #F231A5');
  });

  it('should render leftLine with secondary line color when lineColor is secondary', () => {
    renderWithTheme(
      <Heading leftLine lineColor="secondary">
        Heading test
      </Heading>
    );
    const heading = screen.getByRole('heading', {
      name: /Heading test/i,
    });

    expect(heading).toHaveStyleRule('border-left', '0.7rem solid #3CD3C1');
  });

  it('should render bottomLine with primary line color when line Color is primary', () => {
    renderWithTheme(
      <Heading bottomLine lineColor="primary">
        Heading test
      </Heading>
    );
    const heading = screen.getByRole('heading', {
      name: /Heading test/i,
    });

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render bottomLine with secondary line color when line Color is secondary', () => {
    renderWithTheme(
      <Heading bottomLine lineColor="secondary">
        Heading test
      </Heading>
    );
    const heading = screen.getByRole('heading', {
      name: /Heading test/i,
    });

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });

  it('should render heading with medium font size when props is no passed', () => {
    renderWithTheme(<Heading> Font size test </Heading>);
    const element = screen.getByRole('heading', { name: /font size test/i });
    expect(element).toHaveStyleRule('font-size', '1.6rem');
  });

  it('should render heading with medium font size when props is medium', () => {
    renderWithTheme(<Heading size="medium"> Font size test </Heading>);
    const element = screen.getByRole('heading', { name: /font size test/i });
    expect(element).toHaveStyleRule('font-size', '1.6rem');
  });

  it('should render heading with small font size when size is small', () => {
    renderWithTheme(<Heading size="small"> Font size test </Heading>);
    const element = screen.getByRole('heading', { name: /font size test/i });
    expect(element).toHaveStyleRule('font-size', '1.4rem');
  });
});
