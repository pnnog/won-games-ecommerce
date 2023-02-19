import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render menu icon', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument();
  });

  it('should render open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    //selecionar o nosso menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    //verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyleRule('opacity', '0');

    //clicar no botão de abrir o menu e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyleRule('opacity', '1');

    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyleRule('opacity', '0');
  });

  it('should render register box when is logged out', () => {
    //se não estiver logado, register box deve estar visivel
    renderWithTheme(<Menu />);
    expect(screen.getByText(/Log in Now/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  it('should hide more links when is logged out ', () => {
    //se estiver logado, os links adicionais devem estar visiveis
    renderWithTheme(<Menu />);
    expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
  });

  it('should render more links when is logged ', () => {
    //se estiver logado, os links adicionais devem estar visiveis
    renderWithTheme(<Menu username="ana" />);
    expect(screen.getByText(/My Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
  });

  it('should hide register box when is logged out ', () => {
    renderWithTheme(<Menu username="ana" />);
    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument();
  });

  // it('should be hide icon menu in desktop view', () => {
  //   renderWithTheme(<Menu />);
  //   expect(screen.queryByLabelText(/open menu/i)).not.toBeInTheDocument();
  // });
});
