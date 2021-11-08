import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../selectors/user';
import { getMainPalette, getOriginalPalette } from '../../selectors/palette';
import { setMainPalette, setOriginalPalette } from '../../actions/palette';
import { deletePaletteFromCollections } from '../../actions/favorite';
import { closeModal } from '../../actions/modals';

const useDelete = (palette) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const mainPalette = useSelector(getMainPalette);
  const originalPalette = useSelector(getOriginalPalette);
  const history = useHistory();
  const location = useLocation();

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/palettes/${palette.id}`,
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
      if (mainPalette.id === deletedPalette.id) {
        dispatch(setMainPalette({ ...mainPalette, id: null }));
      }

      if (originalPalette.id === deletedPalette.id) {
        dispatch(setOriginalPalette({ ...originalPalette, id: null }));
      }

      // Remove palette from collections and fetched palettes.
      dispatch(deletePaletteFromCollections(deletedPalette.id));

      // Close modal
      dispatch(closeModal('deletePalette'));

      // Redirects if needed
      if (location.pathname === `/palettes/${palette.id}`) {
        history.push('/');
      }
    }
  };

  return {
    handleDelete,
  };
};

export default useDelete;
