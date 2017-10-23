/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Helmet } from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

 import injectReducer from 'utils/injectReducer';
 import injectSaga from 'utils/injectSaga';
// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
 import H2 from 'components/H2';
 //import ReposList from 'components/ReposList';
 import AtPrefix from './AtPrefix';
 import CenteredSection from './CenteredSection';
 import Form from './Form';
 import Input from './Input';
 import Section from './Section';
 import messages from './messages';
 //import { loadRepos } from '../App/actions';
 import { submitLogin, changeUsername, changeUserPassword } from './actions';
 import { makeSelectUsername, makeSelectPassword } from './selectors';
 import reducer from './reducer';
 import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props);
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <CenteredSection>
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
            <h2>
              <FormattedMessage {...messages.title} />
            </h2>
          </CenteredSection>
          <CenteredSection>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <AtPrefix>
                  <FormattedMessage {...messages.username} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="User Name"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
              <br/>
              <label htmlFor="password">
                <AtPrefix>
                  <FormattedMessage {...messages.password} />
                </AtPrefix>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.onChangePassword}
                />
              </label>
                <br/>
              <AtPrefix>
              <Input
                id="btnsubmit"
                type="Submit"
                value="Submit"
              />
              </AtPrefix>
              <br/>
              <AtPrefix>
              Not Registered? <Link to="/register">
                Sign Up
              </Link>
            </AtPrefix>
            </Form>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  };

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changeUserPassword(evt.target.value)),
    onSubmitForm: (evt) => {
      console.log("homepage");
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();

      dispatch(submitLogin('authenticate'));
    },

  };
}

const mapStateToProps = createStructuredSelector({
  //repos: makeSelectRepos(),
  //username: makeSelectUsername(),
  //password: makeSelectPassword(),
  //loading: makeSelectLoading(),
  //error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
