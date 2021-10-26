import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Name from '../palette/color/Name';
import Buttons from './Buttons/Buttons';

const Card = ({ palette }) => {
  const [currentColor, setCurrentColor] = useState(palette.colors[0]);

  return (
    <Wrapper>
      <Colors>
        {palette.colors.map((color) => (
          <Color
            key={color.hex}
            $color={color.hex}
            onMouseEnter={() => setCurrentColor(color)}
          />
        ))}
      </Colors>
      <Informations>
        <Name color={currentColor} />
        <Buttons paletteId={palette.id} />
      </Informations>
    </Wrapper>
  );
};

Card.propTypes = {
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
  justify-content: space-between;
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

  &:focus {
    outline: none;
  }
`;

export default Card;
