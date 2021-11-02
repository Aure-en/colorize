import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Copy = ({ paletteId, closeMenu }) => {
  const location = useLocation();

  const copyURL = () => navigator.clipboard.writeText(
    `${window.location.href.slice(
      0,
      window.location.href.length - location.pathname.length,
    )}/palettes/${paletteId}`,
  );

  return (
    <button
      type="button"
      onClick={() => {
        copyURL();
        closeMenu();
      }}
    >
      Copy URL
    </button>
  );
};

Copy.propTypes = {
  paletteId: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Copy;
