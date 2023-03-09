import { Meta, Story } from '@storybook/react';

import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Título do jogo',
    developer: 'Rockstar Games',
    price: 'R$ 299,00',
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

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '102rem' }}>
    <GameCard {...args} />
  </div>
);

export const IsPromotional: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '102rem' }}>
    <GameCard promotionalPrice="R$ 150,00" {...args} />
  </div>
);
