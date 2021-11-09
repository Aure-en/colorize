import {
  getColorHex,
  getColorRgb,
  getColorHsl,
  getColorHsv,
  getColorCmyk,
} from './exportColors';

const formatColorCode = (format, color) => {
  switch (format) {
    case 'rgb':
      return getColorRgb(color);
    case 'hsl':
      return getColorHsl(color);
    case 'hsv':
      return getColorHsv(color);
    case 'cmyk':
      return getColorCmyk(color);
    default:
      return getColorHex(color);
  }
};

export default formatColorCode;
