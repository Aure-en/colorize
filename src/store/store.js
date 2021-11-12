import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/root';

import likeMiddleware from '../middlewares/like';
import favoriteMiddleware from '../middlewares/favorite';
import paletteMiddleware from '../middlewares/palette';
import themesMiddleware from '../middlewares/themes';
import userMiddleware from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    likeMiddleware,
    favoriteMiddleware,
    paletteMiddleware,
    themesMiddleware,
    userMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
