import { Meta, Story } from '@storybook/react';
import FormSignIn from '.';

export default {
  title: 'Forms/FormSignIn',
  component: FormSignIn,
  args: {},

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },

    layout: {
      default: 'fullscreen',
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ width: '30rem', margin: '2rem auto' }}>
    <FormSignIn {...args} />
  </div>
);
