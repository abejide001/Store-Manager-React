import React from 'react';
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
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
