/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('auth');

const isLoggedIn = () => createSelector (
  selectLogin, (loginState) => loginState.get('isLoggedIn')
);

export {
  isLoggedIn,
};
