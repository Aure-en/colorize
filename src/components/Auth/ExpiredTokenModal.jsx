import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';

const ExpiredTokenModal = ({ isModalOpen, closeModal }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <Content>
      <Heading>Expired Session</Heading>
      <Text>
        <p>
          Your session has expired. Please
          {' '}
          <EntryLink to="/login" onClick={closeModal}>
            sign in
          </EntryLink>
          {' '}
          again to collect palettes and find inspiration.
        </p>
      </Text>
    </Content>
  </Modal>
);

ExpiredTokenModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const Content = styled.div`
  text-align: center;
  line-height: 1.5rem;
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

export default ExpiredTokenModal;
