import { render, screen } from '../../utils/test-utils';
import Card from '../../../components/Palettes/Card';
import { palette } from '../../data/palettes';

describe('renders properly', () => {
  test('', () => {
    render(<Card palette={palette} />);
    screen.debug();
    screen.getAllByRole('button', {})
  })
})