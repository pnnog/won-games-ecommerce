import { Meta, Story } from '@storybook/react';
import Checkbox from '.';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    onCheck: { action: 'checked' },
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },

    layout: 'fullscreen',
    backgrounds: {
      default: 'wont-dark',
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <div>
    <div style={{ padding: '1rem' }}>
      <Checkbox
        name="action-checkbox"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: '1rem' }}>
      <Checkbox
        name="action-checkbox"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
    <div style={{ padding: '1rem' }}>
      <Checkbox
        name="adventure-checkbox"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
  </div>
);
