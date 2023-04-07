import { Meta, Story } from '@storybook/react';

import GameCard, { GameCardProps } from '.';
import item from './mock';

export default {
  title: 'GameCard',
  component: GameCard,
  args: { ...item },

  argTypes: {
    onFav: {
      action: 'clicked',
    },
    ribbon: {
      type: 'string',
    },
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
    <GameCard {...args} />
  </div>
);

IsPromotional.args = {
  promotionalPrice: 'R$ 150,00',
};

export const IsFavorite: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '102rem' }}>
    <GameCard favorite {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '110rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonColor: 'secondary',
  ribbonSize: 'small',
};
