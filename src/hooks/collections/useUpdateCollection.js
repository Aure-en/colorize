import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestUpdateCollection } from '../../actions/favorite';

import { toastify } from '../../components/Shared/Toast';

const useUpdateCollection = (collection) => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [error, setError] = useState('');

  /* Can't initialize name as collection.name
   * because the collection is set in the Redux Store
   * asynchronously.
   */
  useEffect(() => {
    if (collection) {
      setName(collection.name);
    }
  }, [collection]);

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
    dispatch(requestUpdateCollection(name, collection?.id));
    toastify('Collection successfully updated.');
  };

  return {
    name,
    error,
    setName,
    setError,
    handleSubmit,
  };
};

export default useUpdateCollection;
