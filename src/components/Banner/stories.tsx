import { Meta, Story } from '@storybook/react';
import Banner from '.';
import { BannerProps } from '.';
import item from './mock';

export default {
  title: 'Banner',
  component: Banner,
  args: { ...item },

  argTypes: {
    ribbon: {
      type: 'string',
    },
  },

  parameters: {
    layout: 'fullscreen',

    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '109rem',
    }}
  >
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '80rem',
    }}
  >
    <Banner ribbon="Ribbon Text Here" {...args} />
  </div>
);
