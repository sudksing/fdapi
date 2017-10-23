/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectUsername = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('username')
);

const makeSelectPassword = () => createSelector (
  selectLogin,
  (loginState) => loginState.get('password')
);

const isLoggedIn = () => createSelector (
  selectLogin, (loginState) => loginState.get('isLoggedIn')
);

const session = () => createSelector (
  selectLogin, (loginState) => loginState.get('sessionSt')
);

export {
  session,
  isLoggedIn,
  selectLogin,
  makeSelectUsername,
  makeSelectPassword,
};
