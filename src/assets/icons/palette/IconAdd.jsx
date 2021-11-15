import React from 'react';
import PropTypes from 'prop-types';

const IconAdd = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-plus"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={size === 36 ? 1 : 0.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

IconAdd.propTypes = {
  size: PropTypes.number,
};

IconAdd.defaultProps = {
  size: 36,
};

export default IconAdd;
