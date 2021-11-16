import { render, screen } from '../../utils/test-utils';
import ShadesTable from '../../../components/Creation/Shades/ShadesTable';
import { getLighterShades, getDarkerShades } from '../../../utils/colors';
import { palette } from '../../data/palettes';

describe('renders a palette and its shades', () => {
  const numberOfShades = 2;
  const shades = {
    light: getLighterShades(palette, numberOfShades),
    dark: getDarkerShades(palette, numberOfShades),
  };

  beforeEach(() => {
    render(
      <ShadesTable
        mainPalette={palette}
        shades={shades}
      />,
    );
  });

  test('render a palette', () => {
    palette.colors.forEach((color) => {
      const colorName = screen.getByText(color.name);
      expect(colorName).toBeInTheDocument();
    });
  });

  test('render lighter shades', () => {
    shades.light.forEach((row) => row.forEach((shade) => {
      const shadeName = screen.getByText(shade.name);
      expect(shadeName).toBeInTheDocument();
    }));
  });

  test('render darker shades', () => {
    shades.dark.forEach((row) => row.forEach((shade) => {
      const shadeName = screen.getByText(shade.name);
      expect(shadeName).toBeInTheDocument();
    }));
  });
});
