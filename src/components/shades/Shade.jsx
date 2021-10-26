import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Name from '../color/Name';

const Step = ({ color }) => (
  <Card>
    <Background $color={color.hex} />
    <Name color={color} />
  </Card>
);

Step.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.button`
  position: relative;
  background: ${(props) => props.$color};
  min-height: 3.5rem;
  max-height: 3.5rem;
  flex: 1;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 2px solid transparent;
  }
`;

export default Step;
