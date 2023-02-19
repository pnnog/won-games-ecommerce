import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
} as Meta;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.args = {};

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
