import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/user';

const useForm = (palette) => {
  const [name, setName] = useState((palette && palette.name) || '');
  const [themes, setThemes] = useState([]); // Themes name array.
  const [isPublic, setIsPublic] = useState(true);

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

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/palettes/${user.id}`,
      {
        method: 'POST',
        body: JSON.stringify({
          ...palette,
          name,
          themes,
          public: isPublic,
        }),
      },
    );

    const json = await response.json();
    console.log(json);
  };

  return ({
    name,
    setName,
    themes,
    toggleTheme,
    isPublic,
    togglePublic,
    handleSubmit,
  });
};

export default useForm;
