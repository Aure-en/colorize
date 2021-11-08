import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const User = ({ username }) => (
  <CurrentText>{username}</CurrentText>
);

const CurrentText = styled.div`
  display: flex;
  font-size: 1.8em;
  margin-top: 2em;
  margin-left: 1em;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;

export default User;

User.propTypes = {
  username: PropTypes.string.isRequired,
};
