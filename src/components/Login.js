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
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-unresolved
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import '../assets/css/Login.css';
import logo from '../assets/images/logo.png';
import Footer from './layouts/Footer';
import { loginUser } from '../actions/authActions';

class Login extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: '',
  }

  componentWillReceiveProps(propsNext) {
    if (propsNext.auth.user.userId === 'admin') {
      this.props.history.push('/admin');
    }
    if (propsNext.auth.user.userId === 'attendant') {
      this.props.history.push('/attendant');
    }
    if (propsNext.error) this.setState({ errors: propsNext.error });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.data.email,
      password: this.state.data.password,
    };
    this.props.loginUser(user, this.props.history);
    if (this.state.errors !== '') toast.error(this.state.errors.message);
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
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="login-box">
                  <h1>Login</h1>
                  <div className="login-textbox">
                    <i className="fas fa-envelope" />
                    <input type="email" placeholder="Email" id="email" name="email" onChange={this.handleChange} value={email} required />
                  </div>
                  <div className="login-textbox">
                    <i className="fas fa-key" aria-hidden="true" />
                    <input type="password" placeholder="Password" id="password" name="password" onChange={this.handleChange} value={password} required />
                  </div>
                  <input type="submit" value="LOGIN" className="btn" />
                  <ToastContainer />
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
