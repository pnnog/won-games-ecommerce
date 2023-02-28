import { Meta, Story } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: Story = (args) => <Footer {...args} />;