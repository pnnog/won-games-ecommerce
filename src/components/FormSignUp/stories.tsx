import { Meta, Story } from '@storybook/react';
import FormSignUp from '.';

export default {
  title: 'Forms/FormSignUp',
  component: FormSignUp,
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
    <FormSignUp {...args} />
  </div>
);
