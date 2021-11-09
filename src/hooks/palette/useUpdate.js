import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../selectors/user';
import {
  getMainPalette,
} from '../../selectors/palette';
import {
  setMainPalette,
  setOriginalPalette,
} from '../../actions/palette';
import { updatePaletteInCollection } from '../../actions/favorite';
import { closeModal } from '../../actions/modals';

import { formatColorToDatabase } from '../../utils/colors';

import { toastify } from '../../components/Shared/Toast';

const useUpdate = () => {
  const dispatch = useDispatch();

  const palette = useSelector(getMainPalette);

  const [name, setName] = useState(palette.name || '');
  const [themes, setThemes] = useState(
    palette.themes.map((theme) => theme.name) || [],
  ); // Themes name array.
  const [isPublic, setIsPublic] = useState(palette.public || true);
  const [loading, setLoading] = useState('idle');

  const addTheme = (themeToAdd) => {
    setThemes((prev) => [...prev, themeToAdd]);
  };

  const removeTheme = (themeToRemove) => {
    setThemes((prev) => [...prev].filter((theme) => theme !== themeToRemove));
  };

  const toggleTheme = (theme) => {
    if (themes.includes(theme)) {
      removeTheme(theme);
    } else {
      addTheme(theme);
    }
  };

  const togglePublic = () => {
    setIsPublic(!isPublic);
  };

  const user = useSelector(getUser);

  const onSuccess = () => {
    setLoading('fulfilled');
    dispatch(closeModal('updatePalette'));

    const updatedPalette = {
      ...palette,
      name,
      themes: themes.map((theme) => ({ name: theme })),
      public: isPublic,
    };

    dispatch(updatePaletteInCollection(palette));
    dispatch(setMainPalette(updatedPalette));
    dispatch(setOriginalPalette(updatedPalette));
    toastify('Palette successfully updated.');
  };

  const handleSubmit = async () => {
    setLoading('pending');

    const body = JSON.stringify({
      colors: palette.colors.map((color) => formatColorToDatabase(color)),
      name,
      themes: themes.map((theme) => ({ name: theme })),
      public: isPublic,
    });

    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/palettes/${user.id}/${palette.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
        body,
      },
    );

    const json = await response.json();

    if (json.id) {
      onSuccess(json.id);
    } else {
      setLoading('rejected');
    }
  };

  return {
    name,
    setName,
    themes,
    toggleTheme,
    isPublic,
    loading,
    togglePublic,
    handleSubmit,
  };
};

export default useUpdate;
