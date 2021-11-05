import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modals';
import { updateExportPalette } from '../../actions/export';

const Button = ({ palette, closeMenu }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(openModal('export'));
        dispatch(updateExportPalette(palette));
        closeMenu();
      }}
    >
      Export Palette
    </button>
  );
};

Button.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Button;
