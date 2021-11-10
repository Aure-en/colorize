import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../../selectors/user';

import Save from './Save';
import Export from '../../Export/Button';
import Copy from '../../Palettes/Buttons/More/Copy';
import Delete from './Delete';

const Menu = ({ palette, closeMenu }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  return (
    <Wrapper>
      {isLoggedIn && palette.id && <Save paletteId={palette.id} closeMenu={closeMenu} />}
      <Export palette={palette} closeMenu={closeMenu} />
      <Copy paletteId={palette.id} closeMenu={closeMenu} />
      {user?.id === palette.owner?.id && <Delete palette={palette} />}
    </Wrapper>
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
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 2rem;
  border: 1px solid ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  min-width: 8.9rem;
  padding: 0.5rem 0;

  & > * {
    display: inline-block;
    padding: 0.25rem 0rem 0.25rem 1.75rem;
    width: 100%;

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
