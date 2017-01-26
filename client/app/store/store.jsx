import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';

import rootReducer from './reducer';

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant(),
      routerMiddleware(hashHistory)
    )
  );
};
