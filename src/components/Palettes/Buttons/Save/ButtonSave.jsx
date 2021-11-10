import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { requestAddPaletteToCollection, requestDeletePaletteFromCollection } from '../../../../actions/favorite';
import { openModal } from '../../../../actions/modals';
import { getCurrentCollection, getAllFavorites } from '../../../../selectors/favorite';
import { getIsLoggedIn } from '../../../../selectors/user';

import IconBookmark from '../../../../assets/Icons/card/IconBookmark';

const ButtonSave = ({ paletteId }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);
  const favorites = useSelector(getAllFavorites);
  const isFavorite = favorites.find((favorite) => favorite.id === paletteId) !== undefined;
  const currentCollection = useSelector(getCurrentCollection);

  const handleClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal('auth'));
    } else if (isFavorite) {
      dispatch(requestDeletePaletteFromCollection(paletteId));
    } else {
      dispatch(requestAddPaletteToCollection(paletteId, currentCollection));
    }
  };

  return (
    <BtnSave type="button" onClick={handleClick}>
      <IconBookmark isFavorite={isFavorite} />
    </BtnSave>
  );
};

const BtnSave = styled.button`
  color: ${(props) => props.theme.textPrimary};
`;

ButtonSave.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

export default ButtonSave;
