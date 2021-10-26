import { combineReducers } from 'redux';
import palettes from './palettes';
import favorite from './favorite';
import like from './like';
import palette from './palette';

const rootReducer = combineReducers({
  palette,
  palettes,
  like,
  favorite,
});

export default rootReducer;
