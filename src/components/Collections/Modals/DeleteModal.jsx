import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { requestDeleteCollection } from '../../../actions/favorite';

import Modal from '../../Modal/Modal';
import BackButton from '../../Modal/BackButton';

const DeleteModal = ({ collection, isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <Wrapper>
        <Header>
          <Heading>Delete your collection</Heading>
          <Content>
            <p>
              Are you sure you would like to delete your collection
              {' '}
              <strong>{collection?.name}</strong>
              ?
            </p>
            <p>You will be unable to recover it.</p>
          </Content>
        </Header>

        <Form onSubmit={(e) => {
          e.preventDefault();
          dispatch(requestDeleteCollection(collection.id));
        }}
        >
          <Buttons>
            <BackButton onClick={closeModal} />
            <Submit>Delete</Submit>
          </Buttons>
        </Form>
      </Wrapper>
    </Modal>
  );
};

DeleteModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

DeleteModal.defaultProps = {
  collection: null,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.75rem;
  line-height: 2.75rem;
  margin: 0;
`;

const Content = styled.div`
  & > strong {
    font-weight: 500;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Submit = styled.button`
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

export default DeleteModal;
