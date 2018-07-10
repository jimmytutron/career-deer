
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Reducers
import loginReducer from './containers/Login/reducer';
import { signUpReducer, authTestReducer } from './containers/SignUp/reducer';
import chartReducer from './containers/Chart/reducer';
import searchReducer from './containers/Search/reducer';
import addJobReducer from './containers/AddJob/reducer';
import updateJobReducer from './containers/UpdateJob/reducer';
import { testDragReducer, grabJobsReducer } from './containers/TestContainer/reducer';
import viewJobsReducer from './containers/ViewJobs/reducer';
import { reducer as burgerMenuReducer } from 'redux-burger-menu';

const allReducers = combineReducers({
  form: formReducer,
  loggedIn: loginReducer,
  signedUp: signUpReducer,
  chartData: chartReducer,
  addJob: addJobReducer,
  auth: authTestReducer,
  searchData: searchReducer,
  addJob: addJobReducer,
  viewJobs: viewJobsReducer,
  updateJob: updateJobReducer,
  testDrag: testDragReducer,
  allJobs: grabJobsReducer,
  burgerMenu: burgerMenuReducer
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
