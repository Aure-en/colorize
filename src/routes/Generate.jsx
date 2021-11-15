import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ColorThief from 'colorthief';
import { getColorFromRgb, formatColorToDatabase } from '../utils/colors';

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
    palette = palette.map((rgb) => {
      const colorAllFormats = getColorFromRgb(rgb);
      const color = formatColorToDatabase(colorAllFormats);
      return color;
    });
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

  const removeDuplicateFromPalettes = () => {
    setPalettes((prev) => {
      const uniqueArray = prev.filter((palette, index) => {
        const _palette = JSON.stringify(palette);
        return index === prev.findIndex((obj) => JSON.stringify(obj) === _palette);
      });
      return uniqueArray;
    });
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
      });
    });
  };

  const generateManyFromPopular = async () => {
    const POPULAR_URL = `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API}&order_by=popular&per_page=30`;
    generateManyFromUrl(POPULAR_URL, 10);
  };

  const generateManyFromTheme = async (theme) => {
    const THEME_URL = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API}&query=${theme}&per_page=30`;
    generateManyFromUrl(THEME_URL, 3);
  };

  const sendPalettesToDB = (theme) => {
    palettes.forEach((palette) => {
      fetch(
        `${process.env.REACT_APP_SERVER}/palettes/1`,
        {
          method: 'POST',
          body: JSON.stringify({
            colors: palette,
            public: true,
            themes: [{ name: theme }],
          }),
        },
      );
    });
  };

  const sendOneToDB = () => {
    const body = {
      colors: [
        {
          hex: '#F1EDE9',
          name: 'Cloud Dancer',
        },
        {
          hex: '#8CABB8',
          name: 'Pewter Blue',
        },
        {
          hex: '#B89058',
          name: 'Radiance',
        },
        {
          hex: '#9C7251',
          name: 'Cigar Box',
        },
        {
          hex: '#4C464F',
          name: 'Extravagance',
        },
      ],
    };

    fetch(
      `${process.env.REACT_APP_SERVER}/palettes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
  };

  const setAllPalettesToVisible = async () => {
    const indexes = [...Array(260).keys()];
    await Promise.all((indexes).map((index) => {
      fetch(
        `${process.env.REACT_APP_SERVER}/palettes/1/${index}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzY0NTAwMDcsImV4cCI6MTYzNjQ2MDAwNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.v95dGuqf1SBDn925XZWgPQER5NGQMiwpY-s8f2Xlh8DHSvo-zKckNDCKj1EdoqMgzkM0P7U1IoUuUdgu0M-lZYTI7O83Gvz8PSpsoIU-jYholographicEawymE0vcEv1AtP5tb2N2rjwbsVydUYBMROJA8RTWbZYl24unh7Z-JTQevz0756Gl70_9BC14ji6XjQ1t9TeBp1U-9QRfoGWXhZRMoATZTYO957UM5cQXu7YDqAbYp0KEyfn7xe1URScxK3WCzqjYsV7KZJG8TKmGyE8HHxB2Xi_AXixifvjs32R2-PyfZaRoj93Nr227Y1ksQKQJom3ViS6tt1YvZuhwprs_Zr7w',
          },
          body: JSON.stringify({
            public: true,
          }),
        },
      );
    }));
  };

  const sendFeaturedPalettes = async () => {
    const featuredPalettes = palettesData.slice(1).map((palette) => ({
      ...palette,
      colors: palette.colors.map((color) => formatColorToDatabase(color)),
    }));

    await Promise.all(featuredPalettes.map(async (palette) => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/1`,
        {
          method: 'POST',
          body: JSON.stringify({
            colors: palette.colors,
            themes: [],
            name: '',
            public: true,
          }),
        },
      );

      const json = await response.json();
    }));
  };

  const featurePalettes = async () => {
    for (let i = 265; i < 287; i += 1) {
      fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${i}/features`,
        {
          method: 'PATCH',
          body: JSON.stringify({ features: true }),
          headers: {
            Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzY4MDkyMzMsImV4cCI6MTYzNjgxOTIzMywicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJlbWFpbCI6ImFkbWluQGNvbG9yaXplLmNvbSJ9.cyFKRnNuCUAGwcEFKgwARB3uFUf-OCvJP1tZ9HcLNMhq-F8zVRN4_sG9QnWLeqmUfvkzhamiuAzQWzJABeN2gzRp6xRe5GDyVetYKF2__uk_RnwieCT5dbS2ph8EhayVWbTxXu8iw7sl788bmTlw5gSHagkIqm0JnX9lP9czA4GvxYfE6B8FBKGXa4OlICmZ-zA-3KV73GlVOG8meRtd7VmiUWDprwLrJlBj45iByc_tEy27KBk_50Z_YwKLk5k1h6ewcuw_Pk1xXK_zl9p82s7qYBOXTi_4t2VMc1aQ5F44FsG6YGLnqSAUc-BawamOyl8v34pJATQkFPmV6C-cfw',
          },
        },
      );
    }
  };

  return (
    <Wrapper>
      <button type="button" onClick={getPaletteFromImage}>Generate One</button>
      <button type="button" onClick={generateManyFromPopular}>Generate Popular</button>
      <button type="button" onClick={() => generateManyFromTheme('artsy')}>Generate from theme</button>
      <button type="button" onClick={removeDuplicateFromPalettes}>Remove Duplicate</button>
      <button type="button" onClick={() => sendPalettesToDB('artsy')}>Send Palettes</button>
      <button type="button" onClick={sendOneToDB}>Send one</button>
      <button type="button" onClick={setAllPalettesToVisible}>Visibility</button>
      <button type="button" onClick={featurePalettes}>Featured</button>
      <Wrapper>
        <Image id="image" crossOrigin="anonymous" ref={ref} />
        <Palette>{palette.map((color) => <ColorSquare $color={color.hex} />)}</Palette>
      </Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
