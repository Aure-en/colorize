import { combineReducers } from 'redux';
import paletteReducers from './paletteReducer';

const rootReducer = combineReducers({
  palette: paletteReducers,
});

export default rootReducer;
