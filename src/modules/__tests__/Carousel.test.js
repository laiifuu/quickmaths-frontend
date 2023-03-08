import renderer from 'react-test-renderer';
import Carousel from '../Carousel';

describe('Carousel', () => {
  test('Carousel renders as expected', async () => {
    const snapCarousel = renderer.create(
      <Carousel />,
    ).toJSON();
    expect(snapCarousel).toMatchSnapshot();
  });
});
