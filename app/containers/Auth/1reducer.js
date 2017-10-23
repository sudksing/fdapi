/*
 * LoginReducer
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

import {LOGIN, LOGOUT} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoggedIn: false,
  username: '',
  password: '',
});

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log("inside action auth  :" +action.loggedIn);
      return state.set('isLoggedIn', action.loggedIn);
    case LOGOUT:
      return state.set('isLoggedIn', action.loggedOut);
    default:
      return state;
  }
}

export default AuthReducer;
