// This file will configure our store setup

// Maybe add in applyMiddleware later?
import { createStore, combineReducers } from 'redux';
import appReducer from './reducers/app-reducer';
import testReducer from './reducers/test-reducer';

const allReducers = combineReducers({
  app: appReducer,
  test: testReducer
});

export default function configureStore(initialState = {}) {

  const store = createStore(
    allReducers,
    initialState,
    window.devToolsExtension &&  window.devToolsExtension()
  );

  return store;
};
