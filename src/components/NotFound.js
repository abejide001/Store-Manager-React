import React from 'react';
import PropTypes from 'prop-types';
import page from '../assets/images/404.png';


const NotFound = ({ location }) => (
  <div className="container">
    <div>
      <img src={page} alt="not-found" />
    </div>

    <h3>
Specified route does not exist
      {' '}
      <code>{location.pathname}</code>
    </h3>
  </div>
);
NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};
export default NotFound;
