import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openModal } from '../../../../actions/modals';

const Dropdown = ({ collection, close }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button type="button" onClick={() => {}}>Edit Collection</Button>
      <Button type="button" onClick={() => {}}>Delete Collection</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  min-width: 7rem;

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
  }
`;

const Button = styled.button``;

export default Dropdown;
