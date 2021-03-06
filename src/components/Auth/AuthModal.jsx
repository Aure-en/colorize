import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestLogin } from '../../actions/user';

import { toastify } from '../Shared/Toast';

import Modal from '../Modal/Modal';

const AuthModal = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <Content>
        <Heading>Welcome</Heading>
        <Text>
          <p>You must be authenticated to create, save or like palettes.</p>
          <p>
            <EntryLink to="/login" onClick={closeModal}>
              Create an account
            </EntryLink>
            {' '}
            or
            {' '}
            <EntryLink to="/login" onClick={closeModal}>
              sign in
            </EntryLink>
            {' '}
            to collect palettes and find inspiration.
          </p>
          <p>
            You can also
            {' '}
            <EntryLink
              as="button"
              type="button"
              onClick={() => {
                dispatch(
                  requestLogin(
                    process.env.REACT_APP_SAMPLE_IDENTIFIER,
                    process.env.REACT_APP_SAMPLE_PASSWORD,
                  ),
                );
                toastify('Successfully authenticated as Anonymous.');
                closeModal();
              }}
            >
              try Colorize with a sample account.
            </EntryLink>
          </p>
        </Text>
      </Content>
    </Modal>
  );
};

AuthModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const Content = styled.div`
  color: ${(props) => props.theme.textPrimary};
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const Text = styled.div`
  & > p {
    margin: 1rem 0;
  }
`;

const EntryLink = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.primaryText};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    background: ${(props) => props.theme.primaryText};
    width: 0%;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default AuthModal;
