import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from '.';
import { Email } from '@styled-icons/material-outlined';

export default {
  title: 'forms/TextField',
  component: TextField,
  args: {},

  argTypes: {
    onInput: { action: 'typing...' },
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

export const Default: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ padding: '1rem' }}>
      <TextField {...args} />
    </div>
  );
};

Default.args = {
  label: 'E-mail:',
  labelFor: 'email',
  placeholder: 'fulano@gmail.com',
  icon: <Email />,
};

export const Disabled: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ padding: '1rem' }}>
      <TextField {...args} />
    </div>
  );
};

Disabled.args = {
  label: 'E-mail:',
  labelFor: 'email',
  placeholder: 'fulano@gmail.com',
  icon: <Email />,
  disabled: true,
};

export const WithError: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ padding: '1rem' }}>
      <TextField {...args} />
    </div>
  );
};

WithError.args = {
  label: 'E-mail:',
  labelFor: 'email',
  placeholder: 'fulano@gmail.com',
  icon: <Email />,
  error: 'Ops.. Something went wrong',
};
