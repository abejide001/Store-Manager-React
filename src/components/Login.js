/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import '../assets/css/Login.css';
import '../assets/css/style.css';
import logo from '../assets/images/logo.png';
import Footer from './layouts/Footer';
import { loginUser } from '../actions/authActions';

export class Login extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.data.email,
      password: this.state.data.password,
    };
    this.props.loginUser(user, this.props.history);
  }

handleChange = (e) => {
  const data = { ...this.state.data };
  data[e.currentTarget.name] = e.currentTarget.value;
  this.setState({ data });
};

render() {
  const { email, password } = this.state.data;
  return (
    <div>
      <div className="login-body">
        <div className="login-showcase">
          <header>
            <div className="container">
              <div id="header-title">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
          </header>
          <section id="login-area">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="login-box">
                  <h1>Login</h1>
                  <div className="login-textbox">
                    <i className="fas fa-envelope" />
                    <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={email} required />
                  </div>
                  <div className="login-textbox">
                    <i className="fas fa-key" aria-hidden="true" />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={password} required />
                  </div>
                  <button type="submit" className="btn">{this.props.auth.isLogging ? 'LOGGING IN...' : 'LOGIN'}</button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
});
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
