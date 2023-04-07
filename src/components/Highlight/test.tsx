import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Highlight from '.';
import item from './mock';

describe('<Highlight />', () => {
  it('should render Highlight with title, subtitle and button ', () => {
    renderWithTheme(<Highlight {...item} />);

    const title = screen.getByRole('heading', { name: item.title });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', {
      name: item.subtitle,
    });
    expect(subtitle).toBeInTheDocument();

    const button = screen.getByRole('link', { name: /Buy Now/i });
    expect(button).toBeInTheDocument();
  });

  it('should render Highlight with background image ', () => {
    const { container } = renderWithTheme(<Highlight {...item} />);

    expect(container.firstElementChild).toHaveStyle({
      backgroundImage: `url(${item.backgroundImage})`,
    });
  });

  it('should render Highlight with float image ', () => {
    renderWithTheme(<Highlight {...item} floatImage="/float/img" />);

    const floatImage = screen.getByRole('img', { name: item.title });
    expect(floatImage).toHaveAttribute('src', '/float/img');
  });

  it('should render align right by Default', () => {
    const { container } = renderWithTheme(<Highlight {...item} />);
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveStyle({
      'grid-template-areas': "'floatImage content'",
    });
  });

  it('should render text align to left', () => {
    const { container } = renderWithTheme(
      <Highlight {...item} alignment="left" />
    );
    const wrapper = container.firstElementChild;

    expect(wrapper).toHaveStyle({
      'grid-template-areas': "'content floatImage'",
    });
  });
});
