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

export const getPaletteFromImage = (img, number) => {
  let palette;
  if (number > 1) {
    palette = colorThief.getPalette(img, number);
  } else {
    palette = [colorThief.getColor(img)];
  }
  palette = palette.map((rgb) => getColorFromRgb(rgb));
  return palette;
};

export const extractFromImage = (imgElem, number, callback) => {
  if (imgElem.complete) {
    const palette = getPaletteFromImage(imgElem);
    callback(palette);
  } else {
    imgElem.addEventListener('load', () => {
      const palette = getPaletteFromImage(imgElem, number);
      callback(palette);
    });
  }
};

export const removeImageElem = (imgElem) => {
  document.body.removeChild(imgElem);
};

export const fetchRandomImage = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API}`);
  const json = await response.json();
  return json.urls.regular;
};
