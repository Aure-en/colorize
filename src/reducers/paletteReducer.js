import palettes from '../data/palettes';

export const initialState = {
  palette: palettes[0],
  palettes,
};

const paletteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getPalette = (state) => state.palette.palette;

export const getPalettes = (state) => state.palette.palettes;

export default paletteReducer;
