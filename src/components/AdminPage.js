/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../actions/productActions';
import logo from '../assets/images/logo.png';
import '../assets/css/Admin.css';
import '../assets/css/style.css';
import Footer from './layouts/Footer';
import Spinner from '../common/Spinner';

export class Admin extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

handleDelete = (id) => {
  this.props.deleteProduct(id);
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
                <Link to="/create-product">Create Product</Link>
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
          <h1 id="product-header">Products</h1>
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
                    <button className="editBtn"><Link to={`edit-product?id=${item.id}`}>Edit</Link></button>
                    {' '}
                    <button className="deleteBtn" type="submit" onClick={() => this.handleDelete(item.id)}>Delete</button>
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
export default connect(mapStateToProps, { getProducts, deleteProduct })(Admin);
