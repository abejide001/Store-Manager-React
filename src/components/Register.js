/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import '../assets/css/Register.css';
import '../assets/css/style.css';
import logo from '../assets/images/logo.png';
import Footer from './layouts/Footer';

class Register extends Component {
    state = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      role: '',
    }

      handleSubmit = (event) => {
        event.preventDefault();
        const {
          fullname, username, email, password, role,
        } = this.state;
        const userData = {
          fullname,
          username,
          email,
          password,
          role,
        };
        this.props.registerUser(userData);
      }

      handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      };

      render() {
        const {
          fullname, role, username, password, email,
        } = this.state;
        return (
          <div className="register-body">
            <div className="register-showcase">
              <header>
                <div className="container">
                  <div id="header-title">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Admin</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </header>
              <section id="register-area">
                <div className="container">
                  <form onSubmit={this.handleSubmit}>
                    <div className="register-box">
                      <h1>Register</h1>
                      <div className="register-textbox">
                        <i className="fas fa-user" />
                        <input
                          type="text"
                          placeholder="Fullname"
                          value={fullname}
                          name="fullname"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="register-textbox">
                        <i className="fas fa-user" />
                        <input
                          type="text"
                          placeholder="Username"
                          name="username"
                          onChange={this.handleChange}
                          value={username}
                          required
                        />
                      </div>
                      <div className="register-textbox">
                        <i className="fas fa-user" />
                        <input type="text" placeholder="role" name="role" value={role} onChange={this.handleChange} required />
                      </div>
                      <div className="register-textbox">
                        <i className="fas fa-envelope" />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="register-textbox">
                        <i className="fas fa-key" />
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <input type="submit" value="REGISTER" className="btn" />
                    </div>
                  </form>
                </div>
              </section>
              <Footer />
            </div>
          </div>
        );
      }
}
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { registerUser })(Register);
