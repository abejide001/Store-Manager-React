import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth.isAuthenticated === true ? (<Component {...props} />)
      : (<Redirect to="/login" />))}
  />
);
PrivateRoutes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoutes);
