/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './layouts/Footer';
import { editProduct } from '../actions/productActions';
import logo from '../assets/images/logo.png';
import '../assets/css/EditProduct.css';

export class EditProduct extends Component {
    state = {
      name: '',
      price: '',
      quantity_in_inventory: '',
      product_image: '',
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const regex = /\d+/g;
      const id = this.props.location.search.match(regex);
      const { name, price, quantity_in_inventory, product_image } = this.state;
      const productData = {
        name,
        price,
        quantity_in_inventory,
        product_image,
      };
      this.props.editProduct(id, productData);
    }

    handleChange = (e) => {
      this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    render() {
      const {
        name, price, quantity_in_inventory, product_image,
      } = this.state;
      return (
        <div>
          <div className="edit-body">
            <div className="edit-showcase">
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
              <section id="edit">
                <form className="submission-form" onSubmit={this.handleSubmit}>
                  <h1>EDIT PRODUCT</h1>
                  <input type="text" className="input1" name="name" placeholder="Product Name" value={name} onChange={this.handleChange} required />
                  <input type="number" className="input2" name="price" placeholder="Price" value={price} onChange={this.handleChange} required />
                  <input type="number" className="input3" name="quantity_in_inventory" placeholder="quanity in inventory" value={quantity_in_inventory} onChange={this.handleChange} required />
                  <input type="url" name="product_image" placeholder="Image URL" value={product_image} onChange={this.handleChange} required />
                  <input type="submit" value="EDIT" id="sendBtn" />
                </form>
              </section>
              <Footer />
            </div>
          </div>
        </div>
      );
    }
}
EditProduct.propTypes = {
  location: PropTypes.object.isRequired,
  editProduct: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  product: state.product,
});
export default connect(mapStateToProps, { editProduct })(EditProduct);
