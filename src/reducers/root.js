import { combineReducers } from 'redux';
import palettes from './palettes';
import favorite from './favorite';
import like from './like';
import palette from './palette';
import copy from './copy';
import settings from './settings';
import user from './user';

const rootReducer = combineReducers({
  copy,
  palette,
  palettes,
  like,
  favorite,
  settings,
  user,
});

export default rootReducer;
