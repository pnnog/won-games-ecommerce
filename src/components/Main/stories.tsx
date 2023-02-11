import { Meta, Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  title: 'Título do story Basic',
  description: 'Description do story Basic',
};

export const Default: Story = (args) => <Main {...args} />;

Default.args = {
  title: 'Título do story Default',
  description: 'Description do story Default',
};
