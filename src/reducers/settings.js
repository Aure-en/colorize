export const initialState = {
  format: 'hex',
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getFormat = (state) => state.settings.format;

export default settings;
