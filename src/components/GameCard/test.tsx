import { fireEvent, screen } from '@testing-library/react';
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
  it('should render normal price  ', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price);
    expect(price).not.toHaveStyle({
      textDecoration: 'line-trough',
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render promotionPrice if props when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />);
    const price = screen.getByText(props.price);

    //O preço antigo deve estar no documento
    expect(price).toBeInTheDocument();

    //O preço antigo deve ter um line-trough
    expect(price).toHaveStyleRule('text-decoration', 'line-through');

    //O preço antigo deve ficar com a cor cinza
    expect(price).toHaveStyleRule('color', '#8F8F8F');
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);
    const icon = screen.getByLabelText('Remove from Wishlist');
    expect(icon).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    const fav = screen.getAllByRole('button')[0];
    fireEvent.click(fav);

    expect(onFav).toBeCalled();
  });

  it('should render ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );
    const element = screen.getByText(/20% OFF/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule('background', '#3CD3C1');
    expect(element).toHaveStyleRule('height', '2.4rem');
  });
});
