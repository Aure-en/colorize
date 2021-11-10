import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Palettes = ({ palettes }) => (
  <List>
    {palettes.map((palette) => <Card palette={palette} key={palette.id} />)}
  </List>
);

Palettes.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

const List = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  flex: 1;
  grid-gap: 2rem;
  align-content: start;

  @media all and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media all and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Palettes;
