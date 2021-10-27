import React from 'react';
import PropTypes from 'prop-types';

const IconHeart = ({ isLiked }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-heart"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill={isLiked ? 'currentColor' : 'none'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

IconHeart.propTypes = {
  isLiked: PropTypes.bool,
};

IconHeart.defaultProps = {
  isLiked: false,
};

export default IconHeart;
