import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getUser } from '../../selectors/user';
import { getMainPalette } from '../../selectors/palette';
import { closeModal } from '../../actions/modals';

import { formatColorToDatabase } from '../../utils/colors';

const useUpdate = () => {
  const history = useHistory();
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
    history.push('/creation');
    dispatch(closeModal('createPalette'));
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
