import { Meta, Story } from '@storybook/react';
import Radio, { RadioProps } from '.';

export default {
  title: 'Forms/Radio',
  component: Radio,
  args: {},

  argTypes: {
    onCheck: { action: 'checked' },
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

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: '2rem' }}>
      <Radio
        name="radio"
        label="First Radio"
        value="First Radio"
        labelFor="First Radio"
        {...args}
      />
    </div>

    <div style={{ padding: '2rem' }}>
      <Radio
        name="radio"
        label="Secondary Radio"
        value="Secondary Radio"
        labelFor="Secondary Radio"
        {...args}
      />
    </div>

    <div style={{ padding: '2rem' }}>
      <Radio
        name="radio"
        label="Terciary Radio"
        value="Terciary Radio"
        labelFor="Terciary Radio"
        {...args}
      />
    </div>
  </>
);
