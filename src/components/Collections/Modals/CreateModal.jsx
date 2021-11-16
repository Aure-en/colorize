import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCreateCollection from '../../../hooks/collections/useCreateCollection';

import Modal from '../../Modal/Modal';
import BackButton from '../../Modal/BackButton';

const CreateModal = ({ isModalOpen, closeModal }) => {
  const {
    name, setName, error, handleSubmit,
  } = useCreateCollection(closeModal);

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <Wrapper>
        <Header>
          <Heading>Create a new collection</Heading>
          <Subheading>Gather your inspiration in a single place.</Subheading>
        </Header>

        <Form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        >
          <Field>
            <Label htmlFor="name">
              Name
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter the collection name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Label>
            {error && <Error>{error}</Error>}
          </Field>

          <Buttons>
            <BackButton onClick={closeModal} />
            <Button>Create</Button>
          </Buttons>
        </Form>
      </Wrapper>
    </Modal>
  );
};

CreateModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
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

const Subheading = styled.p`
  color: ${(props) => props.theme.textSecondary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
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

const Error = styled.div`
  color: ${(props) => props.theme.primaryText};
  font-size: 0.825rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  justify-self: end;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

export default CreateModal;
