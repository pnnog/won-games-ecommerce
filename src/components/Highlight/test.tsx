import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Highlight from '.';

const props = {
  title: "Red Dead it's back",
  subtitle: "Come see John's new adventures",
  backgroundImage: 'img/red-dead.png',
  buttonLabel: 'Buy Now',
  buttonLink: '/redded-2',
};

describe('<Highlight />', () => {
  it('should render Highlight with title, subtitle and button ', () => {
    renderWithTheme(<Highlight {...props} />);

    const title = screen.getByRole('heading', { name: /Red Dead it's back/i });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', {
      name: /Come see John's new adventures/i,
    });
    expect(subtitle).toBeInTheDocument();

    const button = screen.getByRole('link', { name: /Buy Now/i });
    expect(button).toBeInTheDocument();
  });

  it('should render Highlight with background image ', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstElementChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should render Highlight with float image ', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float/img" />);

    const floatImage = screen.getByRole('img', { name: props.title });
    expect(floatImage).toHaveAttribute('src', '/float/img');
  });

  it('should render align right by Default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveStyle({
      'grid-template-areas': "'floatImage content'",
    });
  });

  it('should render text align to left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    );
    const wrapper = container.firstElementChild;

    expect(wrapper).toHaveStyle({
      'grid-template-areas': "'content floatImage'",
    });
  });
});
