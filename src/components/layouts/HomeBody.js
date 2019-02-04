import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/style.css';

export default function HomeBody() {
  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <div id="header-title">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="showcase">
        <div className="container">
          <h1>Store Manager.</h1>
          <p>
Manage your sales and product inventory records.
          </p>
        </div>
      </section>
    </div>
  );
}
