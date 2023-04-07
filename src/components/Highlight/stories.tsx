import { Meta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';
import item from './mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },

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
