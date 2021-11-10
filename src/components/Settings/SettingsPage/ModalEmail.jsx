/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { edit } from '../../../actions/user';
import { useDispatch } from 'react-redux';

const ModalEmail = () => {
  let subtitle;
  const errorsObj = { email: '' };
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(errorsObj);
  const [confirmPassword, setConfirm] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      background: '#4B5C6B',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      height: '100vh',
      maxWidth: '20rem',
      maxHeight: '12rem',
    },
  };

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

  function afterOpenModal() {
    subtitle.style.color = '#fff';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContainer>
      <EditButtonContainer>
        <EditButton onClick={openModal}>Edit</EditButton>
      </EditButtonContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ChangeUsernameTitle ref={(_subtitle) => (subtitle = _subtitle)}>Change Email</ChangeUsernameTitle>
        <CloseButton onClick={closeModal}>&#10005;</CloseButton>
        <FormContainer onSubmit={submit}>
          <ModalInput type="email@" placeholder="New Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <ModalInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} />
          <SubmitButton type="submit">Valider</SubmitButton>
        </FormContainer>
      </Modal>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
display: flex;
`;

const SubmitButton = styled.button`
align-self: center;
color: #fff;
background-color: #C3CFD9;
padding: 0.2em;
`;

const EditButton = styled.button`
display: flex;
align-self: center;
background-color: #4B5C6B;
font-size: 1.2em;
border-radius: 0.2em;
padding: 0.2em 1em 0.2em 1em;
`;
const EditButtonContainer = styled.div`
display: flex;
width: 100%;
`;

const CloseButton = styled.button`
position: absolute;
top: 0;
right: 0;
`;

const ChangeUsernameTitle = styled.h2`
display: flex;
justify-content: center;
padding-bottom: 1em;
`;

const FormContainer = styled.form`
display: flex;
flex-direction: column;
`;

const ModalInput = styled.input`
margin-bottom: 1em;
`;

export default ModalEmail;
