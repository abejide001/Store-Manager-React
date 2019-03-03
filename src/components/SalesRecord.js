import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './layouts/Footer';
import { getSales } from '../actions/salesAction';
import logo from '../assets/images/logo.png';
import '../assets/css/SalesRecord.css';
import '../assets/css/style.css';

class SalesRecord extends Component {
  componentDidMount() {
    this.props.getSales();
  }

  render() {
    return (
      <div className="sale-body">
        <div className="sale-showcase">
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
          <section id="records">
            <div className="container">
              <div id="record-title">
                <h1>Attendants Sale Records</h1>
              </div>
              {this.props.sale.sales.sales === undefined
                ? 'Sales Loading....'
                : this.props.sale.sales.sales.value.map(sale => (
                  <div id="record-table">
                    <table id="myTable">
                      <tr>
                        <td>{sale.id}</td>
                        <td>{sale.product_name}</td>
                        <td>
#
                          {sale.quantity_sold}
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  sale: state.sale,
});
export default connect(
  mapStateToProps,
  { getSales },
)(SalesRecord);
