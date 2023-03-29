import Link from 'next/link';
import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" bottomLine lineColor="secondary" size="small">
          Contact
        </Heading>
        <S.ColumnNav aria-labelledby="contact">
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
          <a href="#">+55 21 33283719</a>
        </S.ColumnNav>
      </S.Column>
      <S.Column>
        <Heading color="black" bottomLine lineColor="secondary" size="small">
          Follow Us
        </Heading>
        <S.ColumnNav aria-labelledby="social media">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
        </S.ColumnNav>
      </S.Column>
      <S.Column>
        <Heading color="black" bottomLine lineColor="secondary" size="small">
          Links
        </Heading>
        <S.ColumnNav aria-labelledby="useful links">
          <Link href="#">Loja</Link>
          <Link href="#">Explorar</Link>
          <Link href="#">Buscar</Link>
          <Link href="#">FAQ</Link>
        </S.ColumnNav>
      </S.Column>
      <S.Column>
        <Heading color="black" bottomLine lineColor="secondary" size="small">
          Location
        </Heading>
        <S.ColumnNav aria-labelledby="address">
          <a href="#"> Rua 7 de Maio 527 - 89020330 Rio de Janeiro, Brasil</a>
        </S.ColumnNav>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 All rights reserved. </S.Copyright>
  </S.Wrapper>
);

export default Footer;
