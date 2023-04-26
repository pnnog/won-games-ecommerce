import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined';
import { Search as SearchIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line';
import Button from '../Button/index';
import { useState } from 'react';
import Logo from '../Logo/index';
import * as S from './styles';
import MediaMatch from '../MediaMatch/index';
import Link from 'next/link';

export type MenuProps = {
  username?: string;
};
const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon
            role="img"
            aria-label="open menu"
            onClick={() => setIsOpen(true)}
          />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo id="menu" hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store </S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon role="img" aria-label="search icon" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon role="img" aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <>
            <MediaMatch greaterThan="medium">
              <Link href="/sign-in" legacyBehavior passHref>
                <Button as="a">Sign in</Button>
              </Link>
            </MediaMatch>
          </>
        )}
      </S.MenuGroup>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store </S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <>
            <S.RegisterBox>
              <Link href="/sign-in" legacyBehavior passHref>
                <Button as="a" fullWidth size="large">
                  Sign in
                </Button>
              </Link>

              <span> or </span>
              <Link href="/sign-up" legacyBehavior passHref>
                <S.CreateAccount title="Sign Up">Sign up</S.CreateAccount>
              </Link>
            </S.RegisterBox>
          </>
        )}
      </S.FullMenu>
    </S.Wrapper>
  );
};

export default Menu;
