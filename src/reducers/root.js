import { combineReducers } from 'redux';
import palettes from './palettes';
import favorite from './favorite';
import like from './like';
import palette from './palette';
import settings from './settings';

const rootReducer = combineReducers({
  palette,
  palettes,
  like,
  favorite,
  settings,
});

export default rootReducer;
