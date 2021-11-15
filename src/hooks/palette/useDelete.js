import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../selectors/user';
import { getMainPalette, getOriginalPalette } from '../../selectors/palette';
import { setMainPalette, setOriginalPalette } from '../../actions/palette';
import { deletePaletteFromCollection } from '../../actions/favorite';
import { openModal, closeModal } from '../../actions/modals';

import { toastify } from '../../components/Shared/Toast';
import { logout } from '../../actions/user';

const useDelete = (palette) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const mainPalette = useSelector(getMainPalette);
  const originalPalette = useSelector(getOriginalPalette);
  const history = useHistory();
  const location = useLocation();

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/palettes/${palette.id}/${user.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      },
    );

    const json = await response.json();

    // Expired JWT.
    if (json.code === 401 && /expired jwt token/i.test(json.message)) {
      dispatch(closeModal('deletePalette'));
      dispatch(openModal('expiredToken'));
      dispatch(logout());
      localStorage.removeItem('user');
    }

    // Everything went well.
    if (json.id) {
      // Remove id from mainPalette and original if it was the same.
      if (mainPalette.id === json.id) {
        dispatch(setMainPalette({ ...mainPalette, id: null }));
      }

      if (originalPalette.id === json.id) {
        dispatch(setOriginalPalette({ ...originalPalette, id: null }));
      }

      // Remove palette from collection and fetched palettes.
      dispatch(deletePaletteFromCollection(json.id));

      // Close modal
      dispatch(closeModal('deletePalette'));

      toastify('Palette successfully deleted.');

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
