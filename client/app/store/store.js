import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';
import rootReducer from './reducer';

let composeEnhancers = compose;
let middleware = [
  thunk,
  routerMiddleware(hashHistory)
];

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  let devMiddleware = require('./store.dev');
  middleware.push(...devMiddleware);
}

let enhancer = composeEnhancers ? composeEnhancers(
    applyMiddleware(...middleware)
  ) : applyMiddleware(...middleware);

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
};
