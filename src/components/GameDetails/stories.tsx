import { Meta, Story } from '@storybook/react';
import GameDetails, { GameDetailsProps } from '.';
import mock from './mock';

export default {
  title: 'GameDetails',
  component: GameDetails,

  args: {
    ...mock,
  },

  argTypes: {
    releaseDate: {
      control: {
        type: 'date',
      },
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },

    genres: {
      control: {
        type: 'inline-check',
        options: ['action', 'adventure', 'simulator'],
      },
    },
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },

    layout: {
      default: 'fullscreen',
    },

    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '2.4rem', margin: 'auto' }}>
    <GameDetails {...args} />
  </div>
);
