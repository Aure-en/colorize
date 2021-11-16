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

export const formatColorToDatabase = (color) => {
  return {
    hex: color.hex,
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
        (color) => getLighterShade(color.hex, shadesNumber, step),
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
        (color) => getDarkerShade(color.hex, shadesNumber, step),
      ),
    );
  }
  return darkerShades;
};

export const getLighterShade = (colorHex, shadesNumber = 1, currentShade = 1) => {
  const color = Color(colorHex);
  const luminosity = color.lightness();
  const lighter = color.lightness(
    ((100 - luminosity) / (shadesNumber + 1) * currentShade + luminosity),
  );
  return getColorData(lighter);
};

export const getDarkerShade = (colorHex, shadesNumber = 1, currentShade = 1) => {
  const color = Color(colorHex);
  const luminosity = color.lightness();
  const darker = color.lightness(
    luminosity - (luminosity / (shadesNumber + 1) * currentShade),
  );
  return getColorData(darker);
};

export const isColorLight = (colorHex) => {
  const color = Color(colorHex);
  return color.isLight();
} 

export const getBackgroundShade = (colorData) => {
  const color = Color(colorData.hex);
  const lightColor = color.lightness() > 90 ? `${color.lightness(70).hex()}25` : `${color.hex()}15`;
  return lightColor;
}

export const getBackgroundActiveShade = (colorData) => {
  const color = Color(colorData.hex);
  const lightColor = color.lightness() > 90 ? `${color.lightness(70).hex()}40` : `${color.hex()}25`;
  return lightColor;
}

export const getLightShade = (colorData) => {
  const color = Color(colorData.hex || colorData);
  let lightColor;

  if (color.lightness() > 80) {
    lightColor = color.lightness(80);
  } else if (color.lightness() > 50) {
    lightColor = color.lightness(color.lightness() + 25);
  } else {
    lightColor = color.lightness(color.lightness() + 35);
  }
  return lightColor.hex();
}

export const getDarkShade = (colorData) => {
  const color = Color(colorData.hex || colorData);
  let darkColor;

  if (color.lightness() < 40) {
    darkColor = color.lightness(40);
  } else if (color.lightness() < 60) {
    darkColor = color.lightness(color.lightness() - 15);
  } else {
    darkColor = color.lightness(50);
  }
  return darkColor.hex();
}

export const getShadeOnBackground = (colorData, isBackgroundDark = false) => {
  if (isBackgroundDark) {
    return getLightShade(colorData);
  }
  return getDarkShade(colorData);
}

const getTextOnLight = (colorData) => {
  const color = Color(colorData.hex);
  return color.lightness() > 70 ? color.lightness(70).hex() : color.hex();
}

const getTextOnDark = (colorData) => {
  const color = Color(colorData.hex);
  return color.lightness() < 50 ? color.lightness(50).hex() : color.hex();
}

export const getTextShade = (colorData, isBackgroundDark = false) => {
  if (isBackgroundDark) {
    return getTextOnDark(colorData);
  }
  return getTextOnLight(colorData);
}

// Get lighter and darker shades of a color
export const getColorSteps = (colorHex, shadesNumber) => {
  const light = [];
  const dark = [];

  for (let step = 1; step <= shadesNumber; step += 1) {
    light.unshift(
      getLighterShade(colorHex, shadesNumber, step),
    );

    dark.push(
      getDarkerShade(colorHex, shadesNumber, step),
    );
  }

  return {
    light,
    dark,
  };
};