import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Name from './Name';
import ColorButtons from './buttons/ColorButtons';
import useCopy from '../../../hooks/shared/useCopy';

const Color = ({ color }) => {
  const copy = useCopy();

  return (
    <Card>
      <Background
        $color={color.hex}
        onClick={(e) => {
          copy(e.pageX, e.pageY, color);
        }}
      />
      <Informations>
        <Name color={color} />
        <ColorButtons color={color} index={color.id} />
      </Informations>
    </Card>
  );
};

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired),
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired),
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

export default Color;
