import Banner, { BannerProps } from 'components/Banner';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  vertical: true,
  verticalSwiping: true,
  infinite: false,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export type BannerSliderProps = {
  items: BannerProps[];
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
