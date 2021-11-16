import { render, screen } from '../../utils/test-utils';
import Palette from '../../../components/Palette/Palette';
import { palette } from '../../data/palettes';

describe('renders properly', () => {
  beforeEach(() => {
    render(<Palette palette={palette} />);
  });

  test('Renders colors names', () => {
    palette.colors.forEach((color) => {
      const colorName = screen.getByText(color.name);
      expect(colorName).toBeInTheDocument();
    });
  });

  test('Renders colors codes', () => {
    palette.colors.forEach((color) => {
      const colorCode = screen.getByText(color.hex);
      expect(colorCode).toBeInTheDocument();
    });
  });

  test('Renders inputs to edit colors', () => {
    const numberOfColors = palette.colors.length;
    const colorsEdit = screen.getAllByLabelText(/edit.svg/i);
    expect(colorsEdit.length).toBe(numberOfColors);
  });

  test('Renders buttons to remove colors', () => {
    const numberOfColors = palette.colors.length;
    const colorsRemove = screen.getAllByRole('button', { name: /remove color/i });
    expect(colorsRemove.length).toBe(numberOfColors);
  });
});
