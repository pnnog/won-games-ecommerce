import { Meta, Story } from '@storybook/react';
import Banner from '.';
import { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },

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
      maxWidth: '109rem',
    }}
  >
    <Banner ribbon="Ribbon Text Here" {...args} />
  </div>
);
