import { Meta, Story } from '@storybook/react';
import GameInfo, { GameInfoProps } from '.';

export default {
  title: 'Games/GameInfo',
  component: GameInfo,
  args: {
    title: 'Borderlands 3',
    description:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
  },

  parameters: {
    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '2.4rem' }}>
    <GameInfo {...args} />
  </div>
);

export const WithRibbon: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '2.4rem' }}>
    <GameInfo {...args} />
  </div>
);

WithRibbon.args = {
  price: '215,00',
};
