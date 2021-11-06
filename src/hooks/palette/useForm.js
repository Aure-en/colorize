import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/user';

const useForm = (palette) => {
  const [name, setName] = useState((palette && palette.name) || '');
  const [themes, setThemes] = useState([]);
  const [isPublic, setIsPublic] = useState(true);

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
    setThemes,
    isPublic,
    setIsPublic,
    handleSubmit,
  });
};

export default useForm;
