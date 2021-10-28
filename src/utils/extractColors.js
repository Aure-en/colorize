import ColorThief from 'colorthief';
import { getColorFromRgb } from './colors';

const colorThief = new ColorThief();

export const createImageElem = (src) => {
  const img = document.createElement('img');
  img.style.display = 'none';
  img.crossOrigin = 'anonymous';
  document.body.append(img);
  img.src = src;
  return img;
};

export const getPaletteFromImage = (img) => {
  let palette = colorThief.getPalette(img, 5);
  palette = palette.map((rgb) => getColorFromRgb(rgb));
  return palette;
};

export const extractFromImage = (imgElem, callback) => {
  if (imgElem.complete) {
    const palette = getPaletteFromImage(imgElem);
    callback(palette);
  } else {
    imgElem.addEventListener('load', () => {
      const palette = getPaletteFromImage(imgElem);
      callback(palette);
    });
  }
};

export const removeImageElem = (imgElem) => {
  document.body.removeChild(imgElem);
};