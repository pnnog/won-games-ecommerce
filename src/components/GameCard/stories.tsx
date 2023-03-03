import { Meta, Story } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: '/game/image',
    title: 'Título do jogo',
    developer: 'Rockstar',
    altPrice: '250',
    price: '299',
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },

    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />;
