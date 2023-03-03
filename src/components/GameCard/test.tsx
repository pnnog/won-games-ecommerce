import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import GameCard from '.';

const props = {
  img: '/game/image',
  title: 'Título do jogo',
  developer: 'Rockstar',
  altPrice: '250',
  price: '299',
};

/*
    Deve renderizar a imagem
    Deve renderizar o título
    Deve renderizar a desenvolvedora
    Deve renderizar ícone de carrinho
    Deve renderizar o preço
    Deve renderizar o preço com desconto (opcional)
    Deve renderizar o Ribbon (opcional)
    */

describe('<GameCard />', () => {
  it('should render img', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
  });

  it('should render title', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
  });

  it('should render developer', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();
  });

  it('should render icon favorite', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByLabelText('fav button')).toBeInTheDocument();
  });

  it('should render full price ', () => {
    renderWithTheme(<GameCard {...props} />);
    screen.getByRole('heading', { name: props.price });
  });

  it('should render alternative price', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByRole('heading', { name: props.altPrice }));
  });
});
