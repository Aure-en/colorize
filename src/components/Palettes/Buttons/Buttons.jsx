import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLike from './ButtonLike';
import Save from './Save/Save';
import More from './More/More';

const Buttons = ({ palette }) => (
  <Wrapper>
    <Save paletteId={palette.id} />
    <ButtonLike paletteId={palette.id} />
    <More palette={palette} />
  </Wrapper>
);

Buttons.propTypes = {
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

const Wrapper = styled.div`
  display: flex;
`;

export default Buttons;
