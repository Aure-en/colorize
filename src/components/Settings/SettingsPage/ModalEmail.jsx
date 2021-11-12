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

const ModalEmail = () => {
  let subtitle;
  const errorsObj = { email: '' };
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(errorsObj);
  const [confirmPassword, setConfirm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector(getUser);

  function submit(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if (email === '') {
      errorObj.email = 'email is Required';
      error = true;
    }

    setErrors(errorObj);

    if (error) return;

    dispatch(edit(email));
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
        <ChangeUsernameTitle>Change Email</ChangeUsernameTitle>

        <FormContainer onSubmit={edit}>
          <Field>
            <Label htmlFor="email">
              New Email
              <Input
                type="email"
                id="email"
                placeholder="New Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label>
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

export default ModalEmail;
