/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/css/style.css';
import { logoutUser } from '../../actions/authActions';
import logo from '../../assets/images/logo.png';

export class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser();
    window.location.replace('/login');
  }

  render() {
    const { auth } = this.props;
    const { isAuthenticated } = auth;
    const guestLink = (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    const authLink = (
      <ul>
        <li>
          <a href="#" onClick={this.handleLogout}>
Logout
            {' '}
          </a>
          {auth.user.userId === 'user' ? (
            <Link to="/attendant">{auth.user.userId}</Link>
          )
            : (
              <Link to="/admin">{auth.user.userId}</Link>
            )}
        </li>
      </ul>
    );
    return (
      <div>
        <header>
          <div className="container">
            <div id="header-title">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              {isAuthenticated !== false ? authLink : guestLink}
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { logoutUser })(Header);
