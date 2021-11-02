import namedColors from 'color-name-list';
import nearestColor from 'nearest-color';
import Color from 'color';

// Color
export const getColorFromHex = (hex) => {
  const color = Color(hex);
  return getColorData(color);
};

export const getColorFromRgb = (rgb) => {
  const color = Color.rgb(rgb);
  return getColorData(color);
};

export const getColorData = (color) => ({
  hex: color.hex(),
  cmyk: color.cmyk().round().array(),
  hsl: color.hsl().round().array(),
  hsv: color.hsv().round().array(),
  rgb: color.rgb().round().array(),
  name: getColorName(color.hex()).name,
})

export const formatColorToDB = (color) => {
  return {
    hex: color.hex,
    cmyk: {
      cyan: color.cmyk[0],
      magenta: color.cmyk[1],
      yellow: color.cmyk[2],
      key: color.cmyk[3],
    },
    hsl: {
      hue: color.hsl[0],
      saturation: color.hsl[1],
      lightness: color.hsl[2],
    },
    hsv: {
      hue: color.hsv[0],
      saturation: color.hsv[1],
      lightness: color.hsv[2],
    },
    rgb: {
      red: color.rgb[0],
      green: color.rgb[1],
      blue: color.rgb[2],
    },
    name: color.name
  }
}

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
  return getColorData(lighter);
};

const getDarkerShade = (colorHex, step) => {
  const color = Color(colorHex);
  const luminosity = color.hsl().array()[2];
  const darker = color.lightness(
    luminosity - (luminosity / (step + 1)) * step,
  );
  return getColorData(darker);
};

export const isColorLight = (colorHex) => {
  const color = Color(colorHex);
  return color.isLight();
} 

export const getLightShade = (colorData) => {
  const color = Color(colorData.hex);
  const lightColor = color.lightness() > 90 ? `${color.lightness(80).hex()}15` : `${color.hex()}15`;
  return lightColor;
}

export const getDarkShade = (colorData) => {
  const color = Color(colorData.hex);
  const darkColor = color.lightness() < 15 ? color.lightness(25).hex() : color.lightness(30).hex();
  return darkColor;
}

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