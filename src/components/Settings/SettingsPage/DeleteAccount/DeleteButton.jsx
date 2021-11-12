import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DeleteButton = ({ openModal }) => (
  <Button type="button" onClick={openModal}>
    Delete your account
  </Button>
);

DeleteButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.925rem;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default DeleteButton;
