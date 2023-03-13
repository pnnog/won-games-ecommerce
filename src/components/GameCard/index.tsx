import Button from '../Button';
import * as S from './styles';
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite,
} from '@styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
export type GameCardProps = {
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  img: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
};

const GameCard = ({
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.BoxInfo>
        <S.Title>{title} </S.Title>
        <S.Developer> {developer} </S.Developer>
      </S.BoxInfo>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional> {price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
