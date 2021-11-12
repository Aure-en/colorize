/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { edit } from '../../../actions/user';
import { getUser } from '../../../selectors/user';

import Modal from '../../Modal/Modal';
import DisabledButton from './DisabledButton';

const ModalPassword = () => {
  let subtitle;
  const errorsObj = { password: '' };
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState(errorsObj);

  const user = useSelector(getUser);

  function submit(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if (password === '') {
      errorObj.password = 'password is Required';
      error = true;
    }

    setErrors(errorObj);

    if (error) return;

    dispatch(edit(password));
  }

  const [isOpen, setIsOpen] = React.useState(false);

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
        <ChangePasswordTitle placeholder="Password" ref={(_subtitle) => (subtitle = _subtitle)}>Change Password</ChangePasswordTitle>
        <FormContainer onSubmit={submit}>
          <Field>
            <Label htmlFor="current-password">
              Current Password
              <Input
                placeholder="Current Password"
                id="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
          </Field>

          <Field>
            <Label htmlFor="new-password">
              Password
              <Input
                placeholder="New Password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Label>
          </Field>

          <Field>
            <Label htmlFor="confirm-password">
              Confirm Password
              <Input
                placeholder="Confirm Password"
                id="confirm-password"
                value={password}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </Label>
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
`;

const ChangePasswordTitle = styled.h2`
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

export default ModalPassword;
