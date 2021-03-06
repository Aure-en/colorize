import { combineReducers } from 'redux';

import copy from './copy';
import exportReducer from './export';
import favorite from './favorite';
import like from './like';
import modals from './modals';
import palette from './palette';
import palettes from './palettes';
import settings from './settings';
import user from './user';
import users from './users';
import themes from './themes';

const rootReducer = combineReducers({
  copy,
  export: exportReducer,
  favorite,
  like,
  modals,
  palette,
  palettes,
  settings,
  user,
  users,
  themes,
});

export default rootReducer;
