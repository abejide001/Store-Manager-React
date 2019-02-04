import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
