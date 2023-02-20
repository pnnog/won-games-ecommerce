import { Meta, Story } from '@storybook/react';

import * as icon from '@styled-icons/material-outlined';
import { ButtonProps } from './index';

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
  size: 'large',
  children: 'Buy now',
};

export const withIcon: Story = (args) => <Button {...args} />;
withIcon.args = {
  size: 'large',
  children: 'Buy now',
  icon: <icon.AddShoppingCart />,
};

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;
asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};
