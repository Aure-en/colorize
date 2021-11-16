import {
  REQUEST_LIKE_PALETTE,
  REQUEST_UNLIKE_PALETTE,
  REQUEST_LIKES,
  saveLikes,
  likePalette,
  unlikePalette,
} from '../actions/like';
import { openModal } from '../actions/modals';
import { logout } from '../actions/user';

const likeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_LIKE_PALETTE: {
      const { user } = store.getState();
      const dispatch = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/${user.id}/like`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        store.dispatch(likePalette(action.paletteId));
      }
      break;
    }

    case REQUEST_UNLIKE_PALETTE: {
      const { user } = store.getState();
      const dispatch = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/${user.id}/dislike`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        store.dispatch(unlikePalette(action.paletteId));
      }

      break;
    }

    case REQUEST_LIKES: {
      const { user } = store.getState();
      const dispatch = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${user.id}/palettes/likes`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(logout());
        localStorage.removeItem('user');
        return;
      }

      // Everything went well.
      const likesList = json.list.palettesLikes.map((palette) => palette.id);
      store.dispatch(saveLikes(likesList));

      break;
    }

    default:
  }
  next(action);
};

export default likeMiddleware;
