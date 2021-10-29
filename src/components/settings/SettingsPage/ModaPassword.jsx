/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    background: '#4B5C6B',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ModalPassword() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
        <ChangePasswordTitle placeholder="Password" ref={(_subtitle) => (subtitle = _subtitle)}>Change Password</ChangePasswordTitle>
        <CloseButton onClick={closeModal}>&#10005;</CloseButton>
        <FormContainer>
          <ModalInput type="password" placeholder="New Password" minLength="8" required />
          <ModalInput type="password" placeholder="Confirm Password" minLength="8" required />
          <ModalInput type="password" placeholder="Current Password" minLength="8" required />
          <SubmitButton type="submit">Valider</SubmitButton>
        </FormContainer>
      </Modal>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

const SubmitButton = styled.button`
align-self: center;
color: #fff;
background-color: #C3CFD9;

`;

const EditButtonContainer = styled.div`

`;

const EditButton = styled.button`
background-color: #4B5C6B;
font-size: 1.2em;
border-radius: 0.2em;
padding: 0.2em 1em 0.2em 1em;
`;

const CloseButton = styled.button`
position: absolute;
top: 0;
right: 0;
`;

const ChangePasswordTitle = styled.h2`
display: flex;
justify-content: center;
padding-bottom: 1em;
`;

const FormContainer = styled.form`
display: flex;
flex-direction: column;
`;

const ModalInput = styled.input`
display: flex;
margin-bottom: 1em;
`;

export default ModalPassword;
