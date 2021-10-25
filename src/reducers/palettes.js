import palettesData from '../data/palettes';

export const initialState = {
  palettes: palettesData,
  loading: 'idle',
};

const palettes = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getPalettes = (state) => state.palettes.palettes;

export default palettes;
