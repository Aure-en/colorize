import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { savePalette, unsavePalette } from '../../../actions/favorite';
import { getAllFavorites } from '../../../selectors/favorite';
import IconBookmark from '../../../assets/icons/card/IconBookmark';

const ButtonSave = ({ paletteId }) => {
  const favorites = useSelector(getAllFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.find((favorite) => favorite === paletteId) !== undefined;

  const handleClick = () => {
    if (isFavorite) {
      dispatch(unsavePalette(paletteId));
    } else {
      dispatch(savePalette(paletteId));
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
