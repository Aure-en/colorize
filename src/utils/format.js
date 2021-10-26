import Color from 'color';

const formatRgb = (rgb) => Color.rgb(rgb).rgb().round().string();

const formatHsl = (hsl) => Color.hsl(hsl).hsl().round().string();

const formatColorCode = (format, color) => {
  switch (format) {
    case 'rgb':
      return formatRgb(color.rgb);
    case 'hsl':
      return formatHsl(color.hsl);
    default:
      return color.hex;
  }
};

export default formatColorCode;
