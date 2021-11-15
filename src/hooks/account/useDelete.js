import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../selectors/user';
import { logout } from '../../actions/user';

const useDelete = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('idle');
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

    // Everything went well
    if (json.id) {
      dispatch(logout());
      localStorage.removeItem('user');
      history.push('/');
      setLoading('fulfilled');
    } else {
      setLoading('rejected');
    }
  };

  return {
    loading,
    deleteAccount,
  };
};

export default useDelete;
