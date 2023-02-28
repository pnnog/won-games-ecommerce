import { Meta, Story } from '@storybook/react';
import Ribbon from '.';
import { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,

  args: {
    children: 'StoryBook children test',
  },

  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: 'grey',
    }}
  >
    <Ribbon {...args} />
  </div>
);
