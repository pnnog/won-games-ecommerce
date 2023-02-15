import { Meta, Story } from '@storybook/react';
import Heading from '.';
import { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,

  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: 'Most Populars',
};
