import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import Copy from './Copy';
import Export from '../../../Export/Button';

const Menu = ({ palette, isOpen, closeMenu }) => (
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
        <Link to={`/palettes/${palette.id}`}>View Palette</Link>
        <Export palette={palette} closeMenu={closeMenu} />
        <Copy paletteId={palette.id} closeMenu={closeMenu} />
      </Wrapper>
    )}

  </Transition>
);

Menu.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${(props) => (props.$entered ? props.theme.textPrimary : 'transparent')};
  background: ${(props) => props.theme.background};
  max-height: ${(props) => (props.$entered ? '5rem' : 0)};
  transition: all 0.5s ease;
  overflow: hidden;

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

export default Menu;
