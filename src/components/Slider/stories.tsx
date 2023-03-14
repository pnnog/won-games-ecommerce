import { Meta, Story } from '@storybook/react';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import Slider from '.';
import { SliderProps } from '.';

export default {
  title: 'Slider',
  component: Slider,
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background-color: #5f968a;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid black;
  color: white;
  text-align: center;
`;

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
};

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);
