import palettes from '../data/palettes';

export const initialState = {
  palettes,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getPalettes = (state) => state.palette.palettes;

export default reducer;
