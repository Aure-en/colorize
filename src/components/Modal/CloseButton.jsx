import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../assets/Icons/modal/close.svg';

const CloseButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}><IconClose /></Button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.textSecondary};

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;

export default CloseButton;
