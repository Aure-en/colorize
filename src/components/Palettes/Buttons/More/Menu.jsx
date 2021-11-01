import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Copy from './Copy';
import Export from '../../Export/Button';

const Menu = ({ palette, closeMenu }) => (
  <Wrapper>
    <Link to={`/palettes/${palette.id}`}>View Palette</Link>
    <Export palette={palette} closeMenu={closeMenu} />
    <Copy paletteId={palette.id} closeMenu={closeMenu} />
  </Wrapper>
);

Menu.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  closeMenu: PropTypes.func.isRequired,
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

    &:hover {
      background: ${(props) => props.theme.primary};
    }
  }

  & > button {
    text-align: start;
    line-height: inherit;
  }
`;

export default Menu;
