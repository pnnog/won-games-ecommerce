import { Meta, Story } from '@storybook/react';
import { BannerProps } from 'components/Banner';
import styled from 'styled-components';
import BannerSlider, { BannerSliderProps } from '.';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado',
  },

  parameters: {
    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subtitle: '<p> Play the new CrashLands season',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
  },
];

const Style = styled.div`
  max-width: 130rem;
  margin: auto;
  background-color: grey;
`;

export const Default: Story<BannerSliderProps> = (args) => (
  <Style>
    <BannerSlider {...args} />
  </Style>
);

Default.args = {
  items: items,
};
