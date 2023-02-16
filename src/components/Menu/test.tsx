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
});
