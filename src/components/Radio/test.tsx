import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Radio from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

describe('<Radio />', () => {
  it('should render default Radio', () => {
    const { container } = renderWithTheme(
      <Radio label="label" labelFor="labelFor" value="label" />
    );

    expect(screen.getByRole('radio', { name: 'label' })).toBeInTheDocument();

    expect(screen.getByText('label')).toHaveStyle({
      color: theme.colors.white,
    });

    expect(screen.getByText('label')).toHaveAttribute('for', 'labelFor');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Radio with black label', () => {
    renderWithTheme(
      <Radio labelFor="labelFor" label="label" labelColor="black" />
    );
    expect(screen.getByText('label')).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('should render radio callback when status is changed', async () => {
    //mock a função e passando para o componente
    const mockFn = jest.fn();
    renderWithTheme(
      <Radio
        labelFor="radio"
        label="radio"
        onCheck={mockFn}
        value="any value"
      />
    );
    //verifica chamada a função
    expect(mockFn).not.toBeCalled();

    //altera o status com click
    await waitFor(() => userEvent.click(screen.getByLabelText('radio')));

    //verifica chamada a função após o click
    expect(mockFn).toHaveBeenCalledTimes(1);

    //verifica se o argumento recebido pela função é igual o value
    expect(mockFn).toHaveBeenCalledWith('any value');
  });
});
