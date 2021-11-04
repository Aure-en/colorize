import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/root';

import likeMiddleware from '../middlewares/like';
import favoriteMiddleware from '../middlewares/favorite';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(likeMiddleware, favoriteMiddleware),
);

const store = createStore(rootReducer, enhancers);

export default store;
