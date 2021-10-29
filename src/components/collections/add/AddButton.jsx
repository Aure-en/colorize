import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as IconCreate } from '../../../assets/icons/collections/create.svg';

const AddButton = ({ openModal }) => (
  <Button type="button" onClick={openModal}>
    <IconCreate />
    Create a new collection
  </Button>
);

AddButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${(props) => props.theme.text_primary}70;
  width: 15rem;
  height: 13rem;
  padding: 0;
`;

export default AddButton;
