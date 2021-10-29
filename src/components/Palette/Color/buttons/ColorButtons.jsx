import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getLocked } from '../../../../selectors/palette';
import Edit from './Edit';
import Lock from './Lock';

const ColorButtons = ({ color }) => {
  const locked = useSelector(getLocked);

  return (
    <Buttons>
      <Edit color={color} />
      <Lock
        color={color}
        isLocked={locked[color.id] !== null}
      />
    </Buttons>
  );
};

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
