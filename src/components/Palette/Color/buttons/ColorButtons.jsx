import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Edit from './Edit';

const ColorButtons = ({ color }) => (
  <Buttons>
    <Edit color={color} />
  </Buttons>
);

ColorButtons.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Buttons = styled.div`
  display: flex;
  align-items: start;
  @media all and (min-width: 800px) {
    margin-left: 1rem;
  }
`;

export default ColorButtons;
