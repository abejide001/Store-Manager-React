/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addProducts } from '../actions/productActions';
import logo from '../assets/images/logo.png';
import '../assets/css/AddProduct.css';

export class AddProduct extends Component {
  state = {
    name: '',
    price: '',
    quantity_in_inventory: '',
    product_image: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, price, quantity_in_inventory, product_image,
    } = this.state;
    const productData = {
      name,
      price,
      quantity_in_inventory,
      product_image,
    };
    this.props.addProducts(productData);
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const {
      name, price, quantity_in_inventory, product_image,
    } = this.state;
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
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="create-product">
          <form className="submission-form" onSubmit={this.handleSubmit}>
            <h1>Create Product</h1>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={this.handleChange}
              value={price}
              required
            />
            <input
              type="number"
              name="quantity_in_inventory"
              value={quantity_in_inventory}
              onChange={this.handleChange}
              placeholder="quantity in inventory"
              required
            />
            <input
              type="url"
              name="product_image"
              value={product_image}
              placeholder="Image URL"
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="CREATE PRODUCT" id="sendBtn" />
          </form>
        </section>
      </div>
    );
  }
}
AddProduct.propTypes = {
  addProducts: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  product: state.product,
});
export default connect(mapStateToProps, { addProducts })(AddProduct);
