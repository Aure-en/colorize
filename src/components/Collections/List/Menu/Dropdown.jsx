import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openModal } from '../../../../actions/modals';
import { setModalCollection } from '../../../../actions/favorite';

const Dropdown = ({ collection, close }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(openModal('updateCollection'));
          dispatch(setModalCollection(collection));
          close();
        }}
      >
        Edit Collection

      </Button>
      <Button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(openModal('deleteCollection'));
          close();
        }}
      >
        Delete Collection
      </Button>
    </Wrapper>
  );
};

Dropdown.propTypes = {
  close: PropTypes.func.isRequired,
  collection: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  padding: 0.25rem 0;

  & > * {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    width: 100%;
    color: ${(props) => props.theme.textPrimary};

    &:hover {
      background: ${(props) => props.theme.secondaryBackground};
    }
  }

  & > button {
    text-align: start;
    line-height: inherit;
    color: ${(props) => props.theme.textPrimary};
    white-space: nowrap;
  }
`;

const Button = styled.button``;

export default Dropdown;
