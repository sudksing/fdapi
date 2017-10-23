/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectRegister = (state) => state.get('register');

const makeSelectUsername = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('username')
);

const makeSelectPassword = () => createSelector (
  selectRegister,
  (registerState) => registerState.get('password')
);

export {
  selectRegister,
  makeSelectUsername,
  makeSelectPassword,
};
