import { Meta, Story } from '@storybook/react';

import * as icon from '@styled-icons/material-outlined';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const withIcon: Story = (args) => <Button {...args} />;
withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <icon.AddShoppingCart />,
};
