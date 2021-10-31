import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ toggleMenu }) => (
  <button type="button" onClick={toggleMenu}>
    Export Palette
  </button>
);

Button.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Button;
