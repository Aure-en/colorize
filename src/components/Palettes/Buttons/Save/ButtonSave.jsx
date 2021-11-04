import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { requestSavePalette, requestUnsavePalette } from '../../../../actions/favorite';
import { getAllFavorites } from '../../../../selectors/favorite';
import IconBookmark from '../../../../assets/icons/card/IconBookmark';

const ButtonSave = ({ paletteId }) => {
  const favorites = useSelector(getAllFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.find((favorite) => favorite.id === paletteId) !== undefined;

  const handleClick = () => {
    if (isFavorite) {
      dispatch(requestUnsavePalette(paletteId));
    } else {
      dispatch(requestSavePalette(paletteId, 0));
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      <IconBookmark isFavorite={isFavorite} />
    </button>
  );
};

ButtonSave.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

export default ButtonSave;
