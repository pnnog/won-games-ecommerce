import Button from '../Button';
import * as S from './styles';
import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

export type GameCardProps = {
  img: string;
  title: string;
  developer: string;

  price: string;
};

const GameCard = ({ img, title, developer, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.BoxInfo>
        <S.Title>{title} </S.Title>
        <S.Developer> {developer} </S.Developer>
      </S.BoxInfo>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
      </S.FavButton>
      <S.BuyBox>
        <S.Price> {price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
