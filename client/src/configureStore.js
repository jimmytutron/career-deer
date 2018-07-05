
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Reducers
import appReducer from './reducers/app-reducer';
import testReducer from './reducers/test-reducer';
import loginReducer from './containers/Login/reducer';



const allReducers = combineReducers({
  app: appReducer,
  test: testReducer,
  form: formReducer,
  loggedIn: loginReducer
});

export default function configureStore(initialState = {}) {

// Add more middlewares here as needed.
const middlewares = [
  thunk
]

const enhancers = [
  applyMiddleware(...middlewares)
];

// This is being used so I'm still allowed to apply a series of middlewares in production
// AND have redux dev tools extensions still accessible if it is installed for development
// https://paulkogel.gitbooks.io/redux-docs/content/docs/api/compose.html
// Compose is really cool, and worth playing around with
// just by itself with basic functions I think.
const composeEnhancers =
process.env.NODE_ENV !== 'production' &&
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
  })
  : compose;


  const store = createStore(
    allReducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
};
