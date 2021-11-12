import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getUser } from '../../../../selectors/user';

const DeleteButton = ({ openModal }) => {
  const user = useSelector(getUser);

  return (
    <>
      {user.id === Number(process.env.REACT_APP_SAMPLE_ID) ? (
        <Button
          type="button"
          disabled
          title="This option is not available on the sample account"
        >
          Delete your account
        </Button>
      ) : (
        <Button type="button" onClick={openModal}>
          Delete your account
        </Button>
      )}
    </>
  );
};

DeleteButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.925rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default DeleteButton;
