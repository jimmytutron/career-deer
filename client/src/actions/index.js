// This index file is where new actions will be imported.
// To add a new action:
// 1) Add an import for it
// 2) Add it as a property to the allActions function
// note:don't forget to have a <name>-actions.js file added to the actions
// directory

// Import all actions to here
import { updateTest } from './test-actions';
import { updateApp } from './app-action';
import { login } from './login-form-action';
 

// Returns an Object of action functions which return types and payloads
function allActions() {
  return {
    updateTest,
    updateApp,
    login
  };  
}
// create a function that takes a series of "action" functions --which themselves return objects
// with type and payloads-- and make the function return and object with methods
// named after those functions, but indicative of being an event listener
export function mapActionsToProps() {
  const actions = allActions();
  let combinedActions = {};
  for (let key in actions) {
    // capitalize first letter for camel case
    let newKey = key.charAt(0).toUpperCase() + key.slice(1)
    combinedActions[`on${newKey}`] = actions[key];
  }
  return combinedActions;
};
