import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useDelete from '../../../../hooks/account/useDelete';

import Modal from '../../../Modal/Modal';

const DeleteModal = ({ isModalOpen, closeModal }) => {
  const { deleteAccount, loading } = useDelete();

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <Heading>Delete Account</Heading>
      <Text>
        <p>
          Are you sure you want to delete your account ?
        </p>
        <p>
          All collections will be deleted and you will be unable
          to recover them.
        </p>
      </Text>
      <Bottom>
        <Small>
          {loading === 'pending' && 'Deleting account...'}
          {loading === 'fulfilled' && 'Account successfully deleted.'}
          {loading === 'rejected' && 'Sorry, something went wrong'}
        </Small>
        <DeleteButton type="button" onClick={deleteAccount}>Delete Account</DeleteButton>
      </Bottom>
    </Modal>
  );
};

DeleteModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const Heading = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textPrimary};
`;

const Text = styled.div`
  margin: 2rem 0;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
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

const Small = styled.small`
  display: block;
  color: ${(props) => props.theme.primaryText};
  font-size: 0.925rem;
`;

export default DeleteModal;
