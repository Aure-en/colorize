import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoggedIn, getUser } from '../../../../selectors/user';
import { getMainPalette, getDidPaletteChange } from '../../../../selectors/palette';

import AuthButton from './AuthButton';
import CreateButton from './CreateButton';
import DisabledButton from './DisabledButton';
import FavoriteButton from './FavoriteButton';
import UpdateButton from './UpdateButton';

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
   *        * If the palette was created by the current user and
   *          they modified it
   *          ➝ Displays the UpdateButton that allows him to update
   *            the palette.
   *
   *        * If the palette was created by the current user and
   *          they did not modify it, no action is possible.
   *          ➝ Display a disabled button
   *
   *        * If the palette was created by another user and not
   *          modified.
   *          ➝ Display a button to save as favorite.
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

  if (!isLoggedIn) {
    return <AuthButton />;
  }

  if (!mainPalette.id) {
    return <CreateButton />;
  }

  if (mainPalette.id && mainPalette.owner.id === user.id) {
    if (!didPaletteChange) {
      return <DisabledButton />;
    }
    return <UpdateButton />;
  }

  if (mainPalette.id && mainPalette.owner.id !== user.id) {
    if (!didPaletteChange) {
      return <FavoriteButton />;
    }
    return <CreateButton />;
  }

  return (<></>);
};
export default SaveButton;
