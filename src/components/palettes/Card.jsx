import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Name from '../color/Name';

const Card = ({ palette }) => {
  const [currentColor, setCurrentColor] = useState(palette[0]);

  useEffect(() => {
    setCurrentColor(palette[0]);
  }, [palette]);

  return (
    <Wrapper>
      <Colors>
        {palette.map((color) => (
          <Color
            key={color.hex}
            $color={color.hex}
            onMouseEnter={() => setCurrentColor(color)}
          />
        ))}
      </Colors>
      <Informations>
        <Name color={currentColor} />
      </Informations>
    </Wrapper>
  );
};

Card.propTypes = {
  palette:
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

const Colors = styled.div`
  display: flex;
  flex: 1;
`;

const Informations = styled.div`
  display: flex;
`;

const Color = styled.button`
  flex: 1;
  height: 100%;
  background: ${(props) => props.$color};
  transition: all 0.2s ease-out;
  min-height: 4rem;

  &:hover {
    flex: 3;
  }
`;

export default Card;
