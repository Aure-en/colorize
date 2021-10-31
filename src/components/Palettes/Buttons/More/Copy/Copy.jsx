import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Copy = ({ paletteId }) => {
  const location = useLocation();
  const copyURL = () => navigator.clipboard.writeText(
    `${window.location.href.replace(
      location.pathname,
      '',
    )}/palettes/${paletteId}`,
  );

  return (
    <button type="button" onClick={copyURL}>
      Copy URL
    </button>
  );
};

Copy.propTypes = {
  paletteId: PropTypes.string.isRequired,
};

export default Copy;
