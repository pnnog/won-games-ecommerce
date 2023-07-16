import { Meta, Story } from '@storybook/react';
import thumbs from './mock';
import Gallery, { GalleryProps } from '.';

export default {
  title: 'Gallery',
  component: Gallery,
  args: { thumbs },

  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: ' 0 auto' }}>
    <Gallery {...args} />
  </div>
);
