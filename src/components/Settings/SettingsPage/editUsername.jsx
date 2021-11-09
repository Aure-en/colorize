import React from 'react';
import { useDispatch } from 'react-redux';
import { EDIT } from '../../actions/user';

const editSettings = () => {
  const [username, setUsername] = useState('');
  const errorsObj = { username: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [confirmPassword, setConfirm] = useState('');

  const dispatch = useDispatch();

  const toggleClass = () => {
    setActive(!isActive);
  };

  function edit(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if (username === '') {
      errorObj.password = 'username is Required';
      error = true;
    }

    setErrors(errorObj);

    if (error) return;

    dispatch(EDIT(username));
  }
};

export default editSettings;