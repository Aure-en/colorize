import palettesData from '../data/palettes';
import { UPDATE_SORT_BY, UPDATE_FILTER_BY } from '../actions/palettes';

export const initialState = {
  palettes: palettesData,
  loading: 'idle',
  sortBy: 'popular',
  filterBy: 'all',
};

const palettes = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_SORT_BY:
      return { ...state, sortBy: action.sortBy };
    case UPDATE_FILTER_BY:
      return { ...state, filterBy: action.filterBy };
    default:
      return state;
  }
};

export const getSortBy = (state) => state.palettes.sortBy;

export const getFilterBy = (state) => state.palettes.filterBy;

export const getPalettes = (state) => state.palettes.palettes;

export default palettes;
