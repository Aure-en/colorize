import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>&#8592; Back</Button>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.textSecondary};

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;

export default BackButton;
