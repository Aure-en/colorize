import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Name = ({ color }) => (
  <Informations>
    <div>
      <div>{color.name}</div>
      <Code $color={color.hex}>{color.hex}</Code>
    </div>
  </Informations>
);

Name.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Code = styled.small`
  color: ${(props) => props.$color};
  font-size: 0.925rem;
  text-transform: uppercase;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow-wrap: break-word;

  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;

export default Name;
