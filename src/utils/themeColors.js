import { getLighterShade, getDarkerShade, isColorLight } from './colors';

/**
 * The Theme Component needs 5 colors to make the website and previews look good.
 * However, the mainPalette might have between 1 and 5 numbers.
 * If it has less than 5 colors, extra colors are calculated from the ones in the palette.
 */

const addOneColorToPalette = (palette) => {
  const [primary] = palette;
  const newColor = isColorLight(primary)
    ? getDarkerShade(primary).hex
    : getLighterShade(primary).hex;
  return [...palette, newColor];
};

const addTwoColorsToPalette = (palette) => {
  const [primary, secondary] = palette;
  const firstColor = isColorLight(primary)
    ? getDarkerShade(primary).hex
    : getLighterShade(primary).hex;
  const secondColor = isColorLight(secondary)
    ? getDarkerShade(secondary).hex
    : getLighterShade(secondary).hex;
  return [...palette, firstColor, secondColor];
};

const addThreeColorsToPalette = (palette) => {
  const [primary, secondary] = palette;
  const firstColor = getDarkerShade(primary).hex;
  const secondColor = getLighterShade(primary).hex;
  const thirdColor = isColorLight(secondary)
    ? getDarkerShade(secondary).hex
    : getLighterShade(secondary).hex;
  return [...palette, firstColor, secondColor, thirdColor];
};

const addFourColorsToPalette = (palette) => {
  const [primary] = palette;
  return [
    ...palette,
    getLighterShade(primary, 2, 1).hex,
    getDarkerShade(primary, 2, 1).hex,
    getLighterShade(primary, 2, 2).hex,
    getDarkerShade(primary, 2, 2).hex,
  ];
};

const getFullThemePalette = (palette) => {
  switch (palette.length) {
    case 1:
      return addFourColorsToPalette(palette);
    case 2:
      return addThreeColorsToPalette(palette);
    case 3:
      return addTwoColorsToPalette(palette);
    case 4:
      return addOneColorToPalette(palette);
    default:
      return palette;
  }
};

export default getFullThemePalette;
