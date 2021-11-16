import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestCreateCollection } from '../../actions/favorite';

import { toastify } from '../../components/Shared/Toast';

const useCreateCollection = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const checkErrors = () => {
    if (!name) {
      setError('Name is required.');
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    const hasErrors = checkErrors();
    if (hasErrors) return;

    // Dispatch request
    dispatch(requestCreateCollection(name));
    toastify('Collection successfully created.');
  };

  return {
    name,
    error,
    setName,
    setError,
    handleSubmit,
  };
};

export default useCreateCollection;
