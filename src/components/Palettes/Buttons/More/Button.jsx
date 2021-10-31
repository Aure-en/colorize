import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDots } from '../../../../assets/icons/card/dots.svg';

const Button = ({ toggleMenu }) => (
  <button type="button" onClick={toggleMenu}>
    <IconDots />
  </button>
);

Button.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Button;
