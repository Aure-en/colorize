/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { edit } from '../../../actions/user';
import { useDispatch } from 'react-redux';

const ModalItem = () => {
  let subtitle;
  const errorsObj = { username: '' };
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState(errorsObj);
  const [confirmPassword, setConfirm] = useState('');

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

    // if (username === '') {
    //   errorObj.username = 'username is Required';
    //   error = true;
    // }

    setErrors(errorObj);
    if (error) return;
    dispatch(edit({ username }));
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
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ChangeUsernameTitle ref={(_subtitle) => (subtitle = _subtitle)}>Change Username</ChangeUsernameTitle>
        <CloseButton onClick={closeModal}>&#10005;</CloseButton>
        <FormContainer onSubmit={submit}>
          <ModalInput placeholder="New Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <ModalInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} required />
          <SubmitButton type="submit">Valider</SubmitButton>
        </FormContainer>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
display:flex;
`;

const SubmitButton = styled.button`
align-self: center;
color: #fff;
background-color: #C3CFD9;
padding: 0.2em;
`;

const EditButton = styled.button`
background-color: #4B5C6B;
font-size: 1.2em;
border-radius: 0.2em;
padding: 0.2em 1em 0.2em 1em;
`;

const EditButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
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

export default ModalItem;
