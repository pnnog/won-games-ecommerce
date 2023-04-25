import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Checkbox />', () => {
  it('should render Checkbox', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    //buscando input pelo seu papel
    expect(screen.getByRole('checkbox'));

    //buscando input pela label dele
    expect(screen.getByLabelText('checkbox label'));

    //buscando label pelo seu texto
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check');
  });

  it('should render Checkbox without label', () => {
    renderWithTheme(<Checkbox labelFor="check" />);
    expect(screen.queryByLabelText('checkbox label')).not.toBeInTheDocument();
  });

  it('should render Checkbox with black label', () => {
    renderWithTheme(
      <Checkbox labelFor="check" label="checkbox label" labelColor="black" />
    );
    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispach onCheck when status changes', async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should render initial checkbox checked', async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
