import Button from 'components/Button';
import * as S from './styles';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import { AddShoppingCart } from '@styled-icons/material-outlined';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    {!!price && (
      <Ribbon size="large" color="secondary">
        {`$${price}`}
      </Ribbon>
    )}
    <Heading color="black" bottomLine lineColor="primary">
      {title}
    </Heading>
    <S.Description> {description} </S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<AddShoppingCart />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
