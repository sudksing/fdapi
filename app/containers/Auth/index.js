/*
 * auth
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import { createStructuredSelector } from 'reselect';


 import injectReducer from 'utils/injectReducer';
 import injectSaga from 'utils/injectSaga';
 import HomePage from 'containers/HomePage';
 import LoginPage from 'containers/LoginPage';
 import { isLoggedIn } from './selectors';
 import reducer from './reducer';
 //import saga from './saga';

 export class Auth extends React.PureComponent {
     render() {
       console.log(this.props.isLoggedIn);
         if (this.props.isLoggedIn) {
             return <HomePage />;
         } else {
             return <LoginPage />;
         }
     }
 }

 const mapStateToProps = createStructuredSelector({
    isLoggedIn: isLoggedIn(),
  //  isLoggedIn: 'true'

   });

 //const mapStateToProps = (state) => {
  //  return {
    //    isLoggedIn: state.auth.isLoggedIn,
    //};
// }
const withConnect = connect(mapStateToProps);
 //export default connect(mapStateToProps)(Auth);

 //export default compose(
   //withConnect,
 //)(Auth);

 const withReducer = injectReducer({ key: 'auth', reducer });
 //const withSaga = injectSaga({ key: 'auth', saga });

 export default compose(
   withReducer,
  // withSaga,
   withConnect,
 )(Auth);
