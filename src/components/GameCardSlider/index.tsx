import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined';
import GameCard, { GameCardProps } from 'components/GameCard';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="Next games" />,
  prevArrow: <ArrowLeft aria-label="Previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
};

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GameCardSlider;
