import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preview = ({ palettes }) => {
  // Display is different depending on the number of palettes
  // in the collection.
  const number = palettes.length;

  return (
    <Wrapper
      $number={number}
      $palettes={palettes}
    />
  );
};

Preview.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
          rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
          hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
          hsv: PropTypes.arrayOf(PropTypes.number).isRequired,
          cmyk: PropTypes.arrayOf(PropTypes.number).isRequired,
        }),
      ),
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const Wrapper = styled.div``;

export default Preview;
