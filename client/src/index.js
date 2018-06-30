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

const initialState = {};
const store = 

ReactDOM.render(

<App />,
 document.getElementById('root')
);
registerServiceWorker();
