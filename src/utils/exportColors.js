const colorKeys = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

const getColorHex = (color) => color.hex;
const getColorRgb = (color) => `rgb(${color.rgb})`;
const getColorHsl = (color) => `hsl(${color.hsl})`;
const getColorHsv = (color) => `hsv(${color.hsv})`;
const getColorCmyk = (color) => `hsl(${color.hsl})`;

const getColorInFormat = (color, format) => {
  switch (format) {
    case 'hex':
      return getColorHex(color);
    case 'rgb':
      return getColorRgb(color);
    case 'hsl':
      return getColorHsl(color);
    case 'hsv':
      return getColorHsv(color);
    case 'cmyk':
      return getColorCmyk(color);
    default:
  }
};

const getColorCss = (key, value) => `--${key}: ${value};`;
const getColorScss = (key, value) => `${key}: ${value};`;

export const getPaletteCssInFormat = (palette, format) => palette.colors
  .reduce(
    (code, color, index) => `${code}
${getColorCss(colorKeys[index], getColorInFormat(color, format))}`,
    '',
  )
  .slice(1); // Remove first extra line-break
