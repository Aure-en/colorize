import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../../selectors/user';

import Save from './Save';
import Export from '../../Export/Button';
import Copy from '../../Palettes/Buttons/More/Copy';
import Delete from './Delete';

const Menu = ({ palette, closeMenu, isOpen }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

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
          {isLoggedIn && palette.id && <Save paletteId={palette.id} closeMenu={closeMenu} />}
          <Export palette={palette} closeMenu={closeMenu} />
          {palette.id && <Copy paletteId={palette.id} closeMenu={closeMenu} />}
          {user?.id === palette.owner?.id && <Delete palette={palette} />}
        </Wrapper>
      )}
    </Transition>
  );
};

Menu.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  closeMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 2rem;
  border: 1px solid ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  min-width: 8.9rem;
  padding: 0.5rem 0;
  opacity: ${(props) => (props.$entered ? 1 : 0)};
  transform: translateX(${(props) => (props.$entered ? '0' : '15%')});
  transition: transform 0.5s ease, opacity 0.25s ease;

  & > * {
    display: inline-block;
    padding: 0.25rem 0rem 0.25rem 1.75rem;
    width: 100%;
    color: ${(props) => props.theme.textPrimary};

    &:hover {
      background: ${(props) => props.theme.secondaryBackground};
    }
  }

  & > button {
    text-align: start;
    line-height: inherit;
  }
`;

export default Menu;
