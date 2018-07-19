
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Reducers
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import { signUpReducer, authTestReducer } from './containers/SignUp/reducer';
import chartReducer from './containers/Chart/reducer';
import addJobReducer from './containers/AddJob/reducer';
import { grabJobsReducer } from './containers/Board/reducer';
import updateJobReducer from './containers/UpdateJob/reducer';
import viewJobsReducer from './containers/ViewJobs/reducer';
import { reducer as burgerMenuReducer } from 'redux-burger-menu';
import searchReducer from './containers/Search/reducer';

const allReducers = combineReducers({
  app: appReducer,
  form: formReducer,
  loggedIn: loginReducer,
  signedUp: signUpReducer,
  // auth: authTestReducer,
  chartData: chartReducer,
  addJob: addJobReducer,
  viewJobs: viewJobsReducer,
  boards: grabJobsReducer,
  updateJob: updateJobReducer,
  burgerMenu: burgerMenuReducer,
  searchData: searchReducer,
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
