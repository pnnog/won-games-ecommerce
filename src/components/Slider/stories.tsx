import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import Slider, { SliderProps, SliderSettings } from '.';

export default {
  title: 'Slider',
  component: Slider,
  args: {},

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },

    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

const SliderStyle = styled.div`
  background-color: #a699ca;
  padding: 12rem 0;
  font-size: 3rem;
  text-align: center;
  color: white;
  border: 0.1rem solid lightgreen;
  height: 30rem;
`;

const settings: SliderSettings = {
  slidesToShow: 1,
  dots: true,
};

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderStyle> Slide 1 </SliderStyle>
    <SliderStyle> Slide 2 </SliderStyle>
    <SliderStyle> Slide 3 </SliderStyle>
    <SliderStyle> Slide 4 </SliderStyle>
    <SliderStyle> Slide 5 </SliderStyle>
  </Slider>
);
Horizontal.args = {
  settings: settings,
};

const verticalSettings: SliderSettings = {
  slidesToShow: 1,
  dots: false,
  vertical: true,
  verticalSwiping: true,
};
export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderStyle> 1 </SliderStyle>
    <SliderStyle> 2 </SliderStyle>
    <SliderStyle> 3 </SliderStyle>
    <SliderStyle> 4 </SliderStyle>
    <SliderStyle> 5 </SliderStyle>
  </Slider>
);
Vertical.args = {
  settings: verticalSettings,
};
