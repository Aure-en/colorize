import palettesData from '../data/palettes';

export const initialState = {
  palette: palettesData[0],
  loading: 'idle',
};

const palette = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getPalette = (state) => state.palette.palette;

export default palette;
