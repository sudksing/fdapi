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

 import H2 from 'components/H2';

 //import AtPrefix from './AtPrefix';
 import CenteredSection from '../CenteredSection';
 //import Form from './Form';
 //import Input from './Input';
 //import Section from './Section';
 import messages from './messages';
 //import { loadRepos } from '../App/actions';
 //import { submitRegister, changeUsername, changeUserPassword } from './actions';
 //import { makeSelectUsername, makeSelectPassword } from './selectors';
 //import reducer from './reducer';
 //import saga from './saga';

export class SuccessPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Registeration Page</title>
          <meta name="description" content="feedbackDO Registration Page" />
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
              <FormattedMessage {...messages.message} />
          <Link to="/">
            here
          </Link>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

SuccessPage.propTypes = {

  };

export function mapDispatchToProps(dispatch) {
  return {

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

//const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  //withReducer,
  //withSaga,
  withConnect,
)(SuccessPage);
