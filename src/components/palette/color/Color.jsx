import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Name from '../../color/Name';

const Color = ({ color }) => (
  <Card>
    <Background
      $color={color.hex}
    />
    <Name color={color} />
  </Card>
);

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.button`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.$color};
  min-height: 5rem;
  flex: 1;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: 2px solid transparent;
  }
`;

export default Color;
