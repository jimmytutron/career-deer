// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// This gives our app access to the store
import { Provider } from 'react-redux';

// Core app
import App from './containers/App/App';

// Import our store configuration.
// We've extracted the logic into a configureStore.js
// file to keep this index.js cleaner and more focused on
// what it needs to be concerned with.
import configureStore from './configureStore';


// We need to determine what we want the initial state of
// the application to be.
const initialState = {
  app: 'I am an app!',
  test: 'Hello world!',
  loggedIn: {
    status: false,
    error: null
  }
};

const store = configureStore(initialState);
const MOUNT_NODE = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);

registerServiceWorker();
