import { Meta, Story } from '@storybook/react';
import ShowCase from '.';

export default {
  title: 'ShowCase',
  component: ShowCase,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado',
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },

    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story = (args) => <ShowCase {...args} />;
