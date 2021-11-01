const colorKeys = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

/* Color Formats */
const getColorHex = (color) => color.hex;
const getColorRgb = (color) => `rgb(${color.rgb.join(', ')})`;
const getColorHsl = (color) => `hsl(${color.hsl
  .map((value, index) => (index > 0 ? `${value}%` : value))
  .join(', ')})`;
const getColorHsv = (color) => `hsv(${color.hsv
  .map((value, index) => (index > 0 ? `${value}%` : value))
  .join(', ')})`;
const getColorCmyk = (color) => `cmyk(${color.cmyk.map((value) => `${value}%`).join(', ')})`;
const getColorFormatArray = (color, format) => `${Array.isArray(color[format]) ? `[${color[format].join(', ')}]` : `"${color[format]}"`},`;

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

/* Code Formats */
const getColorCss = (key, value) => `--${key}: ${value};`;
const getColorScss = (key, value) => `$${key}: ${value};`;
const getColorObject = (key, value) => `${key}: "${value}",`;

export const getPaletteCss = (palette, format) => palette.colors
  .reduce(
    (code, color, index) => `${code}
${getColorCss(colorKeys[index], getColorInFormat(color, format))}`,
    '',
  )
  .slice(1); // Remove first extra line-break

export const getPaletteScss = (palette, format) => palette.colors
  .reduce(
    (code, color, index) => `${code}
${getColorScss(colorKeys[index], getColorInFormat(color, format))}`,
    '',
  )
  .slice(1); // Remove first extra line-break

export const getPaletteObject = (palette, format) => {
  const paletteCode = palette.colors
    .reduce(
      (code, color, index) => `${code}
    ${getColorObject(colorKeys[index], getColorInFormat(color, format))}`,
      '',
    )
    .slice(5); // Remove first extra line-breat + tabs.
  return `{
    ${paletteCode}
}`;
};

export const getPaletteArray = (palette, format) => {
  const paletteCode = palette.colors
    .reduce(
      (code, color, index) => `${code}
    ${colorKeys[index]}: ${getColorFormatArray(color, format)}`,
      '',
    )
    .slice(3); // Remove first extra line-breat + tabs.
  return `{
  ${paletteCode}
}`;
};

export const getPaletteInFormat = (palette, codeFormat, colorFormat) => {
  switch (codeFormat) {
    case 'css':
      return getPaletteCss(palette, colorFormat);
    case 'scss':
      return getPaletteScss(palette, colorFormat);
    case 'object':
      return getPaletteObject(palette, colorFormat);
    case 'array':
      return getPaletteArray(palette, colorFormat);
    default:
  }
};
