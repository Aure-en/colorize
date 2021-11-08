import {
  REQUEST_UPDATE_PALETTE,
  REQUEST_DELETE_PALETTE,
  setMainPalette,
  setOriginalPalette,
} from '../actions/palette';
import { deletePaletteFromCollections } from '../actions/favorite';
import { deletePaletteFromPalettes } from '../actions/palettes';
import { closeModal } from '../actions/modals';

const paletteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_UPDATE_PALETTE: {
      /*
       * 1. API Request to edit the palette.
       * 2. If the request is fulfilled:
       *    - Update the main palette if it was the one updated
       *    - Update the palette every time it appears in palettes.
       *    - Update the palette in collections.
       */
      break;
    }

    case REQUEST_DELETE_PALETTE: {
      const { user } = store.getState();
      const { palette, originalPalette } = store.getState().palette;
      const { dispatch } = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const deletedPalette = await response.json();

      if (deletedPalette.id) {
        // Remove id from mainPalette and original if it was the same.
        if (palette.id === deletedPalette.id) {
          dispatch(setMainPalette({ ...palette, id: null }));
        }

        if (originalPalette.id === deletedPalette.id) {
          dispatch(setOriginalPalette({ ...originalPalette, id: null }));
        }

        // Remove palette from collections and fetched palettes.
        dispatch(deletePaletteFromCollections(deletedPalette.id));
        dispatch(deletePaletteFromPalettes(deletedPalette.id));

        // Close modal
        dispatch(closeModal('deletePalette'));
      }

      break;
    }

    default:
  }

  next(action);
};

export default paletteMiddleware;
