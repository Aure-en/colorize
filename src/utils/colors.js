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
        (color) => getLighterShade(color, step),
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
        (color) => getDarkerShade(color, step),
      ),
    );
  }
  return darkerShades;
};

const getLighterShade = (color, step) => {
  const colorObject = Color(color.hex);
  const luminosity = colorObject.hsl().array()[2];
  const lighter = colorObject.lightness(
    ((100 - luminosity) / (step + 1)) * step + luminosity,
  );

  return {
    rgb: lighter.rgb().array(),
    hex: lighter.hex(),
    hsl: lighter.hsl().array(),
    name: getColorName(lighter.hex()).name,
  };
};

const getDarkerShade = (color, step) => {
  const colorObject = Color.rgb(color.rgb);
  const luminosity = colorObject.hsl().array()[2];
  const darker = colorObject.lightness(
    luminosity - (luminosity / (step + 1)) * step,
  );

  return {
    rgb: darker.rgb().array(),
    hex: darker.hex(),
    hsl: darker.hsl().array(),
    name: getColorName(darker.hex()).name,
  };
};