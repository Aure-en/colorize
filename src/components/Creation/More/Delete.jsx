import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { openModal } from '../../../actions/modals';
import { setModalPalette } from '../../../actions/palette';

const Delete = ({ palette }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(openModal('deletePalette'));
        dispatch(setModalPalette(palette));
      }}
    >
      Delete Palette
    </button>
  );
};

Delete.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Delete;
