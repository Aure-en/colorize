import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const User = ({ username }) => (
  <CurrentText>{username}</CurrentText>
);

const CurrentText = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export default User;

User.propTypes = {
  username: PropTypes.string.isRequired,
};
