import '../../../.jest/match-media-mock';
import { fireEvent, screen } from '@testing-library/react';

import Gallery from '.';
import mock from './mock';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Gallery />', () => {
  it('should render modal opened', () => {
    renderWithTheme(<Gallery thumbs={[mock[0]]} />);

    const modal = screen.getByLabelText('modal');
    expect(modal).toHaveAttribute('aria-hidden', 'true');

    const thumb = screen.getByRole('button', { name: /thumb-1/i });
    fireEvent.click(thumb);

    expect(modal).toHaveAttribute('aria-hidden', 'false');
    expect(modal).toHaveStyle({ opacity: '1', pointerEvents: 'all' });
  });

  it('should render modal closed', () => {
    renderWithTheme(<Gallery thumbs={[mock[0]]} />);

    const modal = screen.getByLabelText('modal');
    expect(modal).toHaveAttribute('aria-hidden', 'true');

    const thumb = screen.getByRole('button', { name: /thumb-1/i });
    fireEvent.click(thumb);

    expect(modal).toHaveAttribute('aria-hidden', 'false');
  });
});
