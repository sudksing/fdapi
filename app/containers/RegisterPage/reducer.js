/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {CHANGE_USERNAME, SUBMIT_REGISTER, CHANGE_USERPASSWORD} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name);
    case SUBMIT_REGISTER:
      return state.set('credentials', action.cred);
    case CHANGE_USERPASSWORD:
    return state.set('password', action.password);
    default:
      return state;
  }
}

export default registerReducer;
