// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// This wraps our Main app component to give access to material-ui stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  loggedIn: {
    status: false,
    error: null
  },
  signedUp: {
    status: false,
    error: null
  },
  addJob: {
    status: false,
    error: null
  },
  updateJob: {
    status: false,
    error: null,
    job: null
  },
  searchData: {
    data: [],
    saved: []
  },
  chartData: {
    all: {
      title: {
        display: true,
        text: 'Current Employment Progress (SAMPLE)'
      },
      legend: {
        display: true,
        position: 'right'
      },
      labels: [
        'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
      ],
      data: [50, 30, 20, 10, 5]
    },
    user: {
      title: {
        display: true,
        text: 'Current Employment Progress (SAMPLE)'
      },
      legend: {
        display: true,
        position: 'right'
      },
      labels: [
        'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
      ],
      data: [50, 30, 20, 10, 5]
    }
  },
  testDrag: {
    items: [],
    selected: [
      {
        id: '0',
        val: 'chicken'
      },
      {
        id: '0',
        val: 'chicken'
      },
      {
        id: '0',
        val: 'chicken'
      },
      {
        id: '0',
        val: 'chicken'
      },
      {
        id: '0',
        val: 'chicken'
      }
    ]
  },
  allJobs: {
    jobs: []
  }
};

const store = configureStore(initialState);
const MOUNT_NODE = document.querySelector('#root');

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  MOUNT_NODE
);

registerServiceWorker();
