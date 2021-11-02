import { render, screen } from '../utils/test-utils';
import Palette from '../../components/Palette/Palette';
import { palette } from '../data/palettes';

describe('renders properly', () => {
  beforeAll(() => {
    render(<Palette palette={palette} />);
  });

  test('renders colors names', () => {
    screen.debug();
  });

  test('renders colors codes', () => {

  });

  test('renders input to edit color', () => {

  });

  test('renders button to lock color', () => {

  });
});
