import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productActions';
import Footer from './layouts/Footer';
import logo from '../assets/images/logo.png';
import '../assets/css/AttendantPage.css';
import '../assets/css/style.css';
import Spinner from '../common/Spinner';

export class AttendantPage extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { products } = this.props.product.products;
    const { search } = this.state;
    const foundProducts = products
      && products.value.filter(
        product => product.name.toLowerCase().includes(search.toLowerCase()),
      );

    return (
      <div>
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
                  <Link to="./available-products">Available Products</Link>
                </li>
                <li>
                  <Link to="./individual-attendant-sale-record">Records</Link>
                </li>
                <li>
                  <input
                    type="search"
                    placeholder="Search Product"
                    value={search}
                    name="search"
                    onChange={this.handleChange}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="product-area">
          <div className="container">
            <h2>Products</h2>
            <div className="products">
              {foundProducts === undefined ? (
                <Spinner />
              ) : (
                foundProducts.map(item => (
                  <div className="product-item" key={item.id}>
                    <img src={item.product_image} className="product-image" />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">
#
                      {(item.price).toLocaleString()}
                                        </p>
                    <p>
                      <button className="product-button" type="button">
                        ADD TO CART
                      </button>
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        <section className="container cart-section">
          <div className="container">
            <h1 id="cart-title">CART</h1>
            <div className="cart-row">
              <span className="cart-item cart-header cart-column">ITEM</span>
              <span className="cart-price cart-header cart-column">PRICE</span>
              <span className="cart-quantity cart-header cart-column">
                QUANTITY
              </span>
            </div>
            <div className="cart-items" />
            <div className="cart-total">
              <strong className="cart-total-title">Total</strong>
              <span className="cart-total-price">#0</span>
            </div>
            <button className="purchase-button" type="button">
              PURCHASE
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.product,
});
export default connect(
  mapStateToProps,
  { getProducts },
)(AttendantPage);
