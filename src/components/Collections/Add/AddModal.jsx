import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCreateCollection from '../../../hooks/collections/useCreateCollection';
import Modal from '../../Shared/Modal/Modal';
import BackButton from '../../Shared/Modal/BackButton';

const AddModal = ({ isModalOpen, closeModal }) => {
  const {
    name, setName, error, loading, handleSubmit,
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
            <Submit>Create</Submit>
          </Buttons>
        </Form>
      </Wrapper>
    </Modal>
  );
};

AddModal.propTypes = {
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

  &::placeholder {
    color: ${(props) => props.theme.text_silent};
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
`;

const Error = styled.div`
  color: ${(props) => props.theme.error};
  font-size: 0.825rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Submit = styled.button`
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
`;

export default AddModal;
