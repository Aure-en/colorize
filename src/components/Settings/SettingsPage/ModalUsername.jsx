/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { successEdit } from '../../../actions/user';
import { getUser } from '../../../selectors/user';

import Modal from '../../Modal/Modal';
import DisabledButton from './DisabledButton';
import { toastify } from '../../Shared/Toast';

const ModalItem = () => {
  const errorsObj = { username: '' };
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState(errorsObj);
  const [confirmPassword, setConfirm] = useState('');

  const user = useSelector(getUser);

  async function submit(e) {
    e.preventDefault();
    let error = false;

    setErrors({});

    if (username === '') {
      setErrors((prev) => ({ ...prev, username: 'Username is required.' }));
      error = true;
    }

    if (!confirmPassword) {
      setErrors((prev) => ({ ...prev, password: 'Password is required.' }));
      error = true;
    }

    if (error) return;

    const loginCheck = await fetch(
      'https://apicolorize.me/api/login_check',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: confirmPassword,
        }),
      },
    );

    const loginCheckJson = await loginCheck.json();

    // Login was not done because password was incorrect.
    if (loginCheckJson.status === 400 || loginCheckJson.code === 401) {
      setErrors((prev) => ({ ...prev, password: 'Invalid password.' }));
      return;
    }

    const body = JSON.stringify({
      username,
    });

    const response = await fetch(
      `https://apicolorize.me/api/v1/user/${user.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
        body,
      },
    );

    const json = await response.json();

    const check = await fetch(
      'https://apicolorize.me/api/login_check',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: confirmPassword,
        }),
      },
    );

    const checkJson = await check.json();

    dispatch(
      successEdit({
        username,
        email: checkJson.data.email,
        token: checkJson.token,
      }),
    );

    setIsOpen(false);
    toastify('Username successfully updated.');

    localStorage.setItem(
      'user',
      JSON.stringify({
        username,
        email: checkJson.data.email,
        token: checkJson.token,
        id: user.id,
      }),
    );
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContainer>
      <EditButtonContainer>
        {user.id === Number(process.env.REACT_APP_SAMPLE_ID) ? (
          <DisabledButton />
        ) : (
          <Button onClick={openModal}>Edit</Button>
        )}
      </EditButtonContainer>
      <Modal isModalOpen={isOpen} closeModal={closeModal}>
        <ChangeUsernameTitle>Change Username</ChangeUsernameTitle>
        <FormContainer onSubmit={submit}>
          <Field>
            <Label htmlFor="username">
              New Username
              <Input
                placeholder="New Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Label>
            {errors.username && <div>{errors.username}</div>}
          </Field>

          <Field>
            <Label htmlFor="password">
              Password
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </Label>
            {errors.password && <div>{errors.password}</div>}
          </Field>
          <Button type="submit">Valider</Button>
        </FormContainer>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
`;

const EditButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ChangeUsernameTitle = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textPrimary};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 0 0.25rem 0;
  background: transparent;
  color: ${(props) => props.theme.textPrimary};

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.textPrimary};
    outline: 2px solid transparent;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 0.825rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.textPrimary};
`;

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  align-self: center;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

export default ModalItem;
