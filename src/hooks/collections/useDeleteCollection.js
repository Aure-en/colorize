import { useDispatch } from 'react-redux';

import { requestDeleteCollection } from '../../actions/favorite';

import { toastify } from '../../components/Shared/Toast';

const useDeleteCollection = (collectionId) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestDeleteCollection(collectionId));
    toastify('Collection successfully deleted.');
  };

  return { handleSubmit };
};

export default useDeleteCollection;
