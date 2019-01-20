import React from 'react';
import '../assets/css/style.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomeBody from './layouts/HomeBody';

export default function Home() {
  return (
    <div className="landing-page">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
}
