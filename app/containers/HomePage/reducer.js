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

import {CHANGE_USERNAME, SUBMIT_LOGIN, CHANGE_USERPASSWORD, LOGIN, LOGOUT} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name);
    case SUBMIT_LOGIN:
      return state.set('credentials', action.cred);
    case CHANGE_USERPASSWORD:
      return state.set('password', action.password);
    case LOGIN:
      return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
    case LOGOUT:
      return Object.assign({}, state, {
                isLoggedIn: false,
                username: action.username,
                password: action.password
            });
    default:
      return state;
  }
}

export default homeReducer;
