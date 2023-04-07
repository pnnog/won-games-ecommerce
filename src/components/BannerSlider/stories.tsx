import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import BannerSlider, { BannerSliderProps } from '.';
import items from './mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },

  parameters: {
    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

const Style = styled.div`
  max-width: 130rem;
  margin: auto;
  background-color: grey;
`;

export const Default: Story<BannerSliderProps> = (args) => (
  <Style>
    <BannerSlider {...args} />
  </Style>
);

Default.args = {
  items: items,
};
