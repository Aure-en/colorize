import userEvent from '@testing-library/user-event';
import { render, screen } from '../../utils/test-utils';
import Card from '../../../components/Palettes/Card';
import { palette } from '../../data/palettes';
import Copies from '../../../components/Copy/Copies';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Card colors', () => {
  beforeEach(() => {
    render(<Card palette={palette} />);
  });

  test('Colors are rendered on the card', () => {
    const colorButtons = screen.getAllByRole('button', { name: /#[A-F0-9]{6}/i });
    expect(colorButtons.length).toBe(palette.colors.length);
  });
});

describe('Card color informations', () => {
  beforeEach(() => {
    render(<Card palette={palette} />);
  });

  test('initially, the first color\'s informations are rendered on the card', () => {
    const [firstColor] = palette.colors;

    const colorCode = screen.getByText(firstColor.hex);
    expect(colorCode).toBeInTheDocument();

    const colorName = screen.getByText(firstColor.name);
    expect(colorName).toBeInTheDocument();
  });

  test('after hovering on another color, its informations are displayed instead', () => {
    const [firstColor, secondColor] = palette.colors;

    // Initially, first color informations are displayed.
    let firstColorCode = screen.getByText(firstColor.hex);
    expect(firstColorCode).toBeInTheDocument();

    let firstColorName = screen.getByText(firstColor.name);
    expect(firstColorName).toBeInTheDocument();

    // Hover on second color button
    const colorButtons = screen.getAllByRole('button', { name: /#[A-F0-9]{6}/i });
    userEvent.hover(colorButtons[1]);

    // Second color informations are displayed
    const secondColorCode = screen.getByText(secondColor.hex);
    expect(secondColorCode).toBeInTheDocument();

    const secondColorName = screen.getByText(secondColor.name);
    expect(secondColorName).toBeInTheDocument();

    // First color informations are not displayed anymore
    firstColorCode = screen.queryByText(firstColor.hex);
    expect(firstColorCode).toBe(null);

    firstColorName = screen.queryByText(firstColor.name);
    expect(firstColorName).toBe(null);
  });
});

describe('Copy card color on click', () => {
  beforeEach(() => {
    render(
      <>
        <Copies />
        <Card palette={palette} />
      </>,
    );
  });

  test('Color code is copied on click', () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    const colorButton = screen.getByRole('button', { name: new RegExp(palette.colors[0].hex, 'i') });
    userEvent.click(colorButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(palette.colors[0].hex.toUpperCase());
  });

  test('Indicator is displayed to show the color code has been copied', () => {
    const colorButton = screen.getByRole('button', { name: new RegExp(palette.colors[0].hex, 'i') });
    userEvent.click(colorButton);
    const copyIndicator = screen.queryAllByText(/copied/i);
    expect(copyIndicator.length).toBeGreaterThan(0);
  });
});

describe('Card menu', () => {
  beforeEach(() => {
    render(<Card palette={palette} />);
  });

  test('Menu is rendered', () => {

  });
})