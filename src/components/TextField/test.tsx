import { screen, waitFor } from '@testing-library/react';
import { Email } from '@styled-icons/material-outlined';

import TextField from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

describe('<TextField />', () => {
  it('should render TextField', () => {
    const { container } = renderWithTheme(
      <TextField label="textfield" labelFor="labelFor" />
    );

    const input = screen.getByRole('textbox', { name: 'textfield' });
    const label = screen.getByText('textfield');

    expect(input).toHaveAttribute('id', 'labelFor');
    expect(label).toHaveAttribute('for', 'labelFor');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the text on textField when its change', async () => {
    //mock da função
    const mockOnInput = jest.fn();
    renderWithTheme(
      <TextField label="textfield" labelFor="labelFor" onInput={mockOnInput} />
    );

    const input = screen.getByRole('textbox');
    const text = 'usuário inserindo dados no input';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(mockOnInput).toHaveBeenCalledTimes(text.length);
    });
  });

  it('should be acessible with tab', async () => {
    renderWithTheme(<TextField label="text field" labelFor="text-field" />);

    const input = screen.getByRole('textbox', { name: /text field/i });

    const body = document.body;
    expect(body).toHaveFocus();

    userEvent.tab();

    waitFor(() => {
      expect(input).toHaveFocus();
    });
  });

  it('should render textfield with icon on left side', () => {
    renderWithTheme(<TextField icon={<Email />} />);

    const icon = screen.getByRole('icon');

    expect(icon).toHaveStyle({ width: '2.2rem' });
    expect(icon).toHaveStyle({ order: '0' });
  });

  it('should render textfield with icon on left side', () => {
    renderWithTheme(<TextField icon={<Email />} iconPosition="right" />);

    const icon = screen.getByRole('icon');

    expect(icon).toHaveStyle({ width: '2.2rem' });
    expect(icon).toHaveStyle({ order: '1' });
  });

  it('should render textfield disabled and value not to be change', async () => {
    const mockOnInput = jest.fn();

    renderWithTheme(
      <TextField
        label="text field"
        labelFor="text-field"
        onInput={mockOnInput}
        disabled
      />
    );

    const input = screen.getByRole('textbox', { name: /text field/i });

    expect(input).toBeDisabled();
    expect(input).toHaveValue('');

    userEvent.type(input, 'testando o value do input');
    await waitFor(() => expect(input).toHaveValue(''));
    expect(mockOnInput).toHaveBeenCalledTimes(0);
  });

  it('Is not acessible by tab when disabled', async () => {
    renderWithTheme(
      <TextField label="text field" labelFor="text-field" disabled />
    );

    const input = screen.getByRole('textbox', { name: /text field/i });
    const body = document.body;

    userEvent.tab();
    expect(input).not.toHaveFocus();
    expect(body).toHaveFocus();
  });

  it('should render text field when have an error', () => {
    const { container } = renderWithTheme(
      <TextField
        label="text field"
        labelFor="text-field"
        error="error text"
        icon={<Email />}
      />
    );

    const inputWrapper = screen.getByRole('textbox', {
      name: /text field/i,
    }).parentElement;
    expect(inputWrapper).toHaveStyle({ 'border-color': '#FF6347' });

    const icon = screen.getByRole('icon');
    expect(icon).toHaveStyle({ color: '#FF6347' });

    const label = screen.getByText('text field');
    expect(label).toHaveStyle({ color: '#FF6347' });

    expect(container.firstChild).toMatchSnapshot();
  });
});
