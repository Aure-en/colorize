import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../selectors/user';
import { logout } from '../../actions/user';

const useDelete = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('idle');
  const [error, setError] = useState('');
  const history = useHistory();
  const user = useSelector(getUser);

  const deleteAccount = async () => {
    setLoading('pending');
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/user/${user.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      },
    );

    const json = response.json();
    console.log(json);

    // Everything went well
    dispatch(logout());
    localStorage.removeItem('user');
    history.push('/');
    setLoading('fulfilled');
  };

  return {
    error,
    loading,
    deleteAccount,
  };
};

export default useDelete;
