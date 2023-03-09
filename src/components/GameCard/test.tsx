import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import GameCard from '.';

const props = {
  img: '/game/image',
  title: 'Título do jogo',
  developer: 'Rockstar Games',
  price: '299',
};

describe('<GameCard />', () => {
  // Deve renderizar a imagem
  it('should render card image', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
  });

  //Deve renderizar o título
  it('should render title', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
  });

  //Deve renderizar a desenvolvedora

  it('should render developer', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();
  });

  // Deve renderizar ícone de carrinho
  it('should render icon favorite', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });

  // Deve renderizar o preço
  it('should render full price ', () => {
    renderWithTheme(<GameCard {...props} />);
    screen.getByRole('heading', { name: props.price });
  });
});
