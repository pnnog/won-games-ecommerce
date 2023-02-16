import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined';
import { Search as SearchIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line';
import { useState } from 'react';
import Logo from '../Logo/index';
import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon
          role="img"
          aria-label="open menu"
          onClick={() => setIsOpen(true)}
        />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon role="img" aria-label="search icon" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon role="img" aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />s
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </S.FullMenu>
    </S.Wrapper>
  );
};

export default Menu;
