import { Meta, Story } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado',
  },
} as Meta;

export const Default: Story = (args) => <Logo {...args} />;
