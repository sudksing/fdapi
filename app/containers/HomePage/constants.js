/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'feedbackdo/Home/CHANGE_USERNAME';
export const CHANGE_USERPASSWORD = 'feedbackdo/Home/CHANGE_USERPASSWORD';
export const SUBMIT_LOGIN = 'feedbackdo/Home/SUBMIT_LOGIN';
export const LOGIN = 'feedbackdo/Home/LOGIN';
export const LOGOUT = 'feedbackdo/Home/LOGOUT';
