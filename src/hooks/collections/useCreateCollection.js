import { useState } from 'react';

const useCreateCollection = (onSubmit) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted');
    onSubmit();
  };

  return {
    name,
    error,
    loading,
    setName,
    setError,
    handleSubmit,
  };
};

export default useCreateCollection;
