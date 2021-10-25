import { combineReducers } from 'redux';
import paletteReducers from './paletteReducer';
import favoriteReducer from './favoriteReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
  palette: paletteReducers,
  like: likeReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
