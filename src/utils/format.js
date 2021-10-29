import Color from 'color';

const formatRgb = (rgb) => Color.rgb(rgb).rgb().round().string();

const formatHsl = (hsl) => Color.hsl(hsl).hsl().round().string();

const formatHsv = (hsv) => Color.hsv(hsv).hsv().round().string();

const formatCmyk = (cmyk) => Color.cmyk(cmyk).cmyk().round().string();

const formatColorCode = (format, color) => {
  switch (format) {
    case 'rgb':
      return formatRgb(color.rgb);
    case 'hsl':
      return formatHsl(color.hsl);
    case 'hsv':
      return formatHsv(color.hsv);
    case 'cmyk':
      return formatCmyk(color.cmyk);
    default:
      return color.hex;
  }
};

export default formatColorCode;
