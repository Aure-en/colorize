import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getUser } from '../../selectors/user';
import { getMainPalette } from '../../selectors/palette';
import { closeModal } from '../../actions/modals';

import { formatColorToDatabase } from '../../utils/colors';

import { toastify } from '../../components/Shared/Toast';

const useCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [themes, setThemes] = useState([]); // Themes name array.
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState('idle');

  const palette = useSelector(getMainPalette);

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
    dispatch(closeModal('createPalette'));
    toastify('Palette successfully created.');
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
      `${process.env.REACT_APP_SERVER}/palettes/${user.id}`,
      {
        method: 'POST',
        body,
      },
    );

    const json = await response.json();

    if (json.id) {
      onSuccess();
    } else {
      setLoading('rejected');
    }
  };

  return ({
    name,
    setName,
    themes,
    toggleTheme,
    isPublic,
    loading,
    togglePublic,
    handleSubmit,
  });
};

export default useCreate;
