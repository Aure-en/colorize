export const palettes = [
  {
    id: 0,
    colors: [
      {
        hex: '#F1EDE9',
        cmyk: [
          0,
          2,
          3,
          5,
        ],
        hsl: [
          30,
          22,
          93,
        ],
        hsv: [
          30,
          3,
          95,
        ],
        rgb: [
          241,
          237,
          233,
        ],
        name: 'Cloud Dancer',
      },
      {
        hex: '#8CABB8',
        cmyk: [
          24,
          7,
          0,
          28,
        ],
        hsl: [
          198,
          24,
          64,
        ],
        hsv: [
          198,
          24,
          72,
        ],
        rgb: [
          140,
          171,
          184,
        ],
        name: 'Pewter Blue',
      },
      {
        hex: '#B89058',
        cmyk: [
          0,
          22,
          52,
          28,
        ],
        hsl: [
          35,
          40,
          53,
        ],
        hsv: [
          35,
          52,
          72,
        ],
        rgb: [
          184,
          144,
          88,
        ],
        name: 'Radiance',
      },
      {
        hex: '#9C7251',
        cmyk: [
          0,
          27,
          48,
          39,
        ],
        hsl: [
          26,
          32,
          46,
        ],
        hsv: [
          26,
          48,
          61,
        ],
        rgb: [
          156,
          114,
          81,
        ],
        name: 'Cigar Box',
      },
      {
        hex: '#4C464F',
        cmyk: [
          4,
          11,
          0,
          69,
        ],
        hsl: [
          280,
          6,
          29,
        ],
        hsv: [
          280,
          11,
          31,
        ],
        rgb: [
          76,
          70,
          79,
        ],
        name: 'Extravagance',
      },
    ],
  },
];

export const palette = {
  ...palettes[0],
  colors: palettes[0].colors.map((color, index) => ({
    ...color,
    position: index,
    id: index,
  })),
};
