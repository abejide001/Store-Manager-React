/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, addToCart, removeFromCart } from '../actions/productActions';
import Footer from './layouts/Footer';
import logo from '../assets/images/logo.png';
import '../assets/css/AttendantPage.css';
import '../assets/css/style.css';
import Spinner from '../common/Spinner';
import Notify from '../utils/Notify';

export class AttendantPage extends Component {
  state = {
    search: '',
    carts: [],
  };

  componentDidMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product.cart) {
      this.setState({ carts: nextProps.product.cart });
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleCartClick = (product) => {
    this.props.addToCart(product);
  };

  handlePurchase = () => {
    localStorage.removeItem('userCart');
    Notify.notifySuccess('Purchased');
  }

  handleCartDelete = (id) => {
    const { carts } = this.state;
    const cart = carts.splice(0);
    const position = cart.filter(elem => (elem.id === id));
    cart.splice(position, 1);
    this.setState({ carts: cart });
    this.props.removeFromCart(cart);
  };

  render() {
    const { products } = this.props.product.products;
    const { carts } = this.state;
    const { search } = this.state;
    const foundProducts = products
      && products.value.filter(
        product => product.name.toLowerCase().includes(search.toLowerCase()),
      );
    const styles = {
      width: '100px',
      height: '100px',
    };
    return (
      <div>
        <header>
          <div className="container">
            {this.props.auth.user.userId === 'admin'
              ? this.props.history.push('/admin')
              : null}
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
                      {item.price.toLocaleString()}
                    </p>
                    <p>
                      <button
                        className="product-button"
                        type="button"
                        onClick={() => this.handleCartClick(item)}
                      >
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
            <div className="cart-items">
              {carts.map(item => (
                <div className="cart-row">
                  <div className="cart-item cart-column">
                    <img
                      className="cart-item-image"
                      src={item.product_image}
                      alt="product"
                      style={styles}
                    />
                    <span className="cart-item-title">{item.name}</span>
                  </div>
                  <span className="cart-price cart-column">{item.price}</span>
                  <div className="cart-quantity cart-column">
                    <input
                      className="cart-quantity-input"
                      type="number"
                      min="1"
                      value="1"
                    />
                    <button className="btn-danger" type="button" onClick={() => this.handleCartDelete(item.id)}>
                   X
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong className="cart-total-title">Total</strong>
              <span className="cart-total-price">{carts.length < 2 ? carts.map(a => a.price) : carts.reduce((a, b) => a.price + b.price)}</span>
            </div>
            <button className="purchase-button" disabled={carts.length === 0 ? 'disabled' : null} type="button" onClick={this.handlePurchase}>
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
  auth: state.auth,
  cart: state.cart,
});
export default connect(
  mapStateToProps,
  { getProducts, addToCart, removeFromCart },
)(AttendantPage);
