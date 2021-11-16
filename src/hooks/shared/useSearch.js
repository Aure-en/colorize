import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useSearch = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    if (!search) return;
    history.push(`/search?search=${search}`);
  };

  return {
    search,
    setSearch,
    handleSubmit,
  };
};

export default useSearch;
