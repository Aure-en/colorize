import React from 'react';
import PropTypes from 'prop-types';

const IconLock = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-lock"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
  </svg>
);

IconLock.propTypes = {
  color: PropTypes.string.isRequired,
};

export default IconLock;
