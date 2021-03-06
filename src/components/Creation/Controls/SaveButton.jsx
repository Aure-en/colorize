import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoggedIn, getUser } from '../../../selectors/user';
import { getMainPalette, getDidPaletteChange } from '../../../selectors/palette';
import { getAllFavorites } from '../../../selectors/favorite';

import AuthButton from '../Save/AuthButton';
import CreateButton from '../Save/CreateButton';
import FavoriteButton from '../Save/FavoriteButton';
import UnfavoriteButton from '../Save/UnfavoriteButton';
import UpdateButton from '../Save/UpdateButton';

const SaveButton = () => {
  /*
   * If the user is not logged in:
   * ➝ Display the AuthButton, which opens the authentification
   *   modal onClick.
   *
   * If the user is logged in :
   *    - If the palette has no id
   *      ➝ Display the CreateButton, which opens the form to save
   *        a newly created palette onClick.
   *
   *    - If the palette has an id :
   *        * If the palette was created by the current user
   *          ➝ Displays the UpdateButton that allows him to update
   *            the palette.
   *
   *        * If the palette was created by another user and not
   *          modified.
   *          ➝ Display a button to save as favorite or unsave as favorite.
   *
   *        * If the palette was created by another user and
   *          modified by the current user
   *          ➝ Display the CreateButton to save the newly modified
   *            palette by the current user.
   */

  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const mainPalette = useSelector(getMainPalette);
  const didPaletteChange = useSelector(getDidPaletteChange);
  const favorites = useSelector(getAllFavorites);
  const isFavorite = favorites.find((favorite) => favorite.id === mainPalette.id) !== undefined;

  if (!isLoggedIn) {
    return <AuthButton />;
  }

  if (!mainPalette.id) {
    return <CreateButton />;
  }

  if (mainPalette.id && mainPalette.owner?.id === user.id) {
    return <UpdateButton />;
  }

  if (mainPalette.id && mainPalette.owner?.id !== user.id) {
    if (!didPaletteChange) {
      if (isFavorite) {
        return <UnfavoriteButton paletteId={mainPalette.id} />;
      }
      return <FavoriteButton paletteId={mainPalette.id} />;
    }
    return <CreateButton />;
  }

  return (<></>);
};

export default SaveButton;
