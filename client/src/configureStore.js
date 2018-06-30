// This file will configure our store setup

// Maybe add in applyMiddleware later?
import { createStore, compose } from 'redux';
// Will use this to convert arrays into immutable lists
// and raw objects into immutable maps.
import { fromJS } from 'immutable';

