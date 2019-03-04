import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/style.css';
import Header from './Header';
import Footer from './Footer';

export default function HomeBody() {
  return (
    <div className="landing-page">
      <Header />
      <section id="showcase">
        <div className="container">
          <h1>Store Manager.</h1>
          <p>
Manage your sales and product inventory records.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
