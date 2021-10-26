import namedColors from 'color-name-list';
import nearestColor from 'nearest-color';
import Color from 'color';

// Set up color names table.
const colors = namedColors.reduce(
  (
    o: { name: string; hex: string }[],
    { name, hex }: { name: string; hex: string },
  ) => Object.assign(o, { [name]: hex }),
  {},
);

/**
 * Get color name from hex code.
 * @params {string} (color hex)
 * @returns {string} (name)
 * Ex: getColorName(color.hex)
 */
export const getColorName = nearestColor.from(colors);

// Color shades
export const getLighterShades = (palette, shadesNumber) => {
  const lighterShades = [];
  for (let step = 1; step <= shadesNumber; step += 1) {
    lighterShades.unshift(
      palette.colors.map(
        (color) => getLighterShade(color.hex, step),
      ),
    );
  }
  return lighterShades;
};

export const getDarkerShades = (palette, shadesNumber) => {
  const darkerShades = [];
  for (let step = 1; step <= shadesNumber; step += 1) {
    darkerShades.push(
      palette.colors.map(
        (color) => getDarkerShade(color.hex, step),
      ),
    );
  }
  return darkerShades;
};

const getLighterShade = (colorHex, step) => {
  const color = Color(colorHex);
  const luminosity = color.hsl().array()[2];
  const lighter = color.lightness(
    ((100 - luminosity) / (step + 1)) * step + luminosity,
  );

  return {
    rgb: lighter.rgb().array(),
    hex: lighter.hex(),
    hsl: lighter.hsl().array(),
    name: getColorName(lighter.hex()).name,
  };
};

const getDarkerShade = (colorHex, step) => {
  const color = Color(colorHex);
  const luminosity = color.hsl().array()[2];
  const darker = color.lightness(
    luminosity - (luminosity / (step + 1)) * step,
  );

  return {
    rgb: darker.rgb().array(),
    hex: darker.hex(),
    hsl: darker.hsl().array(),
    name: getColorName(darker.hex()).name,
  };
};

// Get lighter and darker shades of a color
export const getColorSteps = (colorHex, shadesNumber) => {
  const light = [];
  const dark = [];

  for (let step = 1; step <= shadesNumber; step += 1) {
    light.unshift(
      getLighterShade(colorHex, step),
    );

    dark.push(
      getDarkerShade(colorHex, step),
    );
  }

  return {
    light,
    dark,
  };
};

// Color
export const getColorFromHex = (hex) => {
  const color = Color(hex);
  return {
    hex,
    rgb: color.rgb().array(),
    hsl: color.hsl().array(),
    name: getColorName(hex).name,
  };
};