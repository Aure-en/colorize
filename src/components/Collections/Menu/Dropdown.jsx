import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';

import { openModal } from '../../../actions/modals';
import { setModalCollection } from '../../../actions/favorite';

const Dropdown = ({ collection, close, isOpen }) => {
  const dispatch = useDispatch();

  return (
    <Transition
      in={isOpen}
      timeout={{
        enter: 0,
        exit: 500,
      }}
      mountOnEnter={false}
      unmountOnExit
    >
      {(state) => (
        <Wrapper $entered={state === 'entered'}>
          <button
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
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              dispatch(openModal('deleteCollection'));
              dispatch(setModalCollection(collection));
              close();
            }}
          >
            Delete Collection
          </button>
        </Wrapper>
      )}
    </Transition>
  );
};

Dropdown.propTypes = {
  close: PropTypes.func.isRequired,
  collection: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  padding: 0.25rem 0;
  opacity: ${(props) => (props.$entered ? 1 : 0)};
  transform: translateY(${(props) => (props.$entered ? '0' : '-15%')});
  transition: transform 0.5s ease, opacity 0.25s ease;

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

export default Dropdown;
