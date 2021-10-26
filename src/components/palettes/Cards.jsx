import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ palettes }) => (
  <List>
    {palettes.map((palette, index) => <Card palette={palette} key={index} />)}
  </List>
);

Cards.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};

const List = styled.ul`
  display: grid;
  width: 100%;
  flex: 1;
  grid-gap: 2rem;
  padding: 15px;

  @media all and (min-width: 500px) {
    grid-template-columns: repeat(2, auto);
  }

  @media all and (min-width: 730px) {
    grid-template-columns: repeat(3, auto);
  }
  
  @media all and (min-width: 900px) {
    grid-template-columns: repeat(4, auto);
  }
`;

export default Cards;
