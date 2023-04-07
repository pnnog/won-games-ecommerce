import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import GameCard from '.';

import item from './mock';

describe('<GameCard />', () => {
  // Deve renderizar a imagem
  it('should render card image', () => {
    renderWithTheme(<GameCard {...item} />);
    expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
      'src',
      item.img
    );
  });

  //Deve renderizar o título
  it('should render title', () => {
    renderWithTheme(<GameCard {...item} />);
    expect(
      screen.getByRole('heading', { name: item.title })
    ).toBeInTheDocument();
  });

  //Deve renderizar a desenvolvedora

  it('should render developer', () => {
    renderWithTheme(<GameCard {...item} />);
    expect(
      screen.getByRole('heading', { name: item.developer })
    ).toBeInTheDocument();
  });

  // Deve renderizar ícone de carrinho
  it('should render icon favorite', () => {
    renderWithTheme(<GameCard {...item} />);
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });

  // Deve renderizar o preço
  it('should render normal price  ', () => {
    renderWithTheme(<GameCard {...item} />);

    const price = screen.getByText(item.price);
    expect(price).not.toHaveStyle({
      textDecoration: 'line-trough',
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render promotionPrice if item when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...item} />);
    const price = screen.getByText(item.price);

    //O preço antigo deve estar no documento
    expect(price).toBeInTheDocument();

    //O preço antigo deve ter um line-trough
    expect(price).toHaveStyleRule('text-decoration', 'line-through');

    //O preço antigo deve ficar com a cor cinza
    expect(price).toHaveStyleRule('color', '#8F8F8F');
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...item} favorite />);
    const icon = screen.getByLabelText('Remove from Wishlist');
    expect(icon).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...item} favorite onFav={onFav} />);

    const fav = screen.getAllByRole('button')[0];
    fireEvent.click(fav);

    expect(onFav).toBeCalled();
  });

  it('should render ribbon', () => {
    renderWithTheme(
      <GameCard
        {...item}
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
