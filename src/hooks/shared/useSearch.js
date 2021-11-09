import { useState } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    console.log('searching');
  };

  return {
    search,
    setSearch,
    handleSubmit,
  };
};

export default useSearch;
