import React from 'react';
import '../../assets/css/style.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <h3>
            Store Manager
            {' '}
            {new Date().getFullYear()}
          </h3>
        </div>
      </footer>
    </div>
  );
}
