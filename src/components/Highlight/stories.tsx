import { Meta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    backgroundImage: 'img/red-dead.png',
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy Now',
    buttonLink: '/#',
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

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

WithFloatImage.args = {
  floatImage: 'img/red-dead-float.png',
};
