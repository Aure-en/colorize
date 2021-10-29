import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLike from './ButtonLike';
import ButtonSave from './ButtonSave';
import ButtonMore from './ButtonMore';

const Buttons = ({ paletteId }) => (
  <Wrapper>
    <ButtonSave paletteId={paletteId} />
    <ButtonLike paletteId={paletteId} />
    <ButtonMore paletteId={paletteId} />
  </Wrapper>
);

Buttons.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
`;

export default Buttons;
