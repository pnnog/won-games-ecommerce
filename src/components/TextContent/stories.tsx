import { Meta, Story } from '@storybook/react';
import TextContent, { TextContentProps } from '.';
import TextContentMock from './mock';

export default {
  title: 'games/TextContent',
  component: TextContent,
  args: {
    ...TextContentMock,
  },

  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },

    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);
