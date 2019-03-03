/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productActions';
import logo from '../assets/images/logo.png';
import '../assets/css/AvailableProducts.css';
import '../assets/css/style.css';
import Footer from './layouts/Footer';
import Spinner from '../common/Spinner';

export class Admin extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props.product.products;
    return (
    <div>
      <header>
        <div className="container">
          <div id="header-title">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/sale-records">Records</Link>
              </li>
              <li>
                <Link to="/add-product">Create Product</Link>
              </li>
              <li>
                <Link to="/available-products.html">Available Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="product-area">
        <div className="container">
          <h1 id="product-header">Available Products</h1>
          <div className="products">
            {products === undefined ? <Spinner />
              : products.value.map(item => (
                <div className="product-item" key={item.id}>
                  <img src={item.product_image} className="product-image" />
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">
#
                    {item.price}
                  </p>
                  <p>
                    {' '}
                    <button className="modalBtn" type="submit">Details</button>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
}

const mapStateToProps = state => ({
  product: state.product,
  error: state.error,
});
export default connect(mapStateToProps, { getProducts })(Admin);
