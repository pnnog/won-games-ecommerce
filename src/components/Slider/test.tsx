import { render, screen } from '@testing-library/react';
import 'match-media-mock';
import Slider, { SliderSettings } from '.';

const settings: SliderSettings = {
  dots: true,
  slidesToShow: 1,
  infinite: false,
};
describe('<Slider />', () => {
  it('should render Slides correctly', () => {
    render(
      <Slider settings={settings}>
        <div> Slide 1 </div>
        <div> Slide 2 </div>
      </Slider>
    );

    expect(screen.getByText(/Slide 1/i).parentNode?.parentNode).toHaveClass(
      'slick-slide'
    );
    expect(screen.getByText(/Slide 2/i).parentNode?.parentNode).toHaveClass(
      'slick-slide'
    );
  });
});
