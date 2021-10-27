import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ColorThief from 'colorthief';
import { getColorFromRgb } from '../utils/colors';

const Generate = () => {
  const ref = useRef();
  const colorThief = new ColorThief();
  const [palette, setPalette] = useState([]);
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    console.log(palettes);
  }, [palettes]);

  const extractPalette = (img) => {
    let palette = colorThief.getPalette(img, 5);
    palette = palette.map((rgb) => getColorFromRgb(rgb));
    return palette;
  };

  const extractPaletteFromImage = () => {
    if (ref.current.complete) {
      const palette = extractPalette(ref.current);
      setPalette(palette);
    } else {
      ref.current.addEventListener('load', () => {
        const palette = extractPalette(ref.current);
        setPalette(palette);
      });
    }
  };

  const fetchImage = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API}`);
    const json = await response.json();
    return json.urls.regular;
  };

  const displayImage = (src) => {
    ref.current.src = src;
  };

  const getPaletteFromImage = async () => {
    const src = await fetchImage();
    displayImage(src);
    extractPaletteFromImage();
  };

  const extractFromImage = (src) => {
    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';
    document.body.append(img);
    img.src = src;

    if (img.complete) {
      const palette = extractPalette(img);
      setPalettes((prev) => [...prev, palette]);
      document.body.removeChild(img);
    } else {
      img.addEventListener('load', () => {
        const palette = extractPalette(img);
        setPalettes((prev) => [...prev, palette]);
        document.body.removeChild(img);
      });
    }
  };

  const generateManyFromUrl = async (url, pagesNumber = 1) => {
    const pages = [...Array(pagesNumber).keys()];

    pages.forEach(async (page) => {
      const response = await fetch(`${url}&page=${page}`);
      const json = await response.json();
      let imagesUrls;
      if (json.results) {
        imagesUrls = json.results.map((image) => image.urls.regular);
      } else {
        imagesUrls = json.map((image) => image.urls.regular);
      }

      imagesUrls.forEach((src) => {
        extractFromImage(src);
        // Send form to DB
      });
    });
  };

  const generateManyFromPopular = async () => {
    const POPULAR_URL = `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API}&order_by=popular&per_page=30`;
    generateManyFromUrl(POPULAR_URL, 3);
  };

  const generateManyFromTheme = async (theme) => {
    const THEME_URL = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API}&query=${theme}&per_page=30`;
    generateManyFromUrl(THEME_URL);
  };

  return (
    <>
      <button type="button" onClick={getPaletteFromImage}>Generate One</button>
      <button type="button" onClick={generateManyFromPopular}>Generate Popular</button>
      <button type="button" onClick={() => generateManyFromTheme('pastel')}>Generate from theme</button>
      <Wrapper>
        <Image id="image" crossOrigin="anonymous" ref={ref} />
        <Palette>{palette.map((color) => <ColorSquare $color={color.hex} />)}</Palette>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const Palette = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorSquare = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.$color}
`;

export default Generate;
