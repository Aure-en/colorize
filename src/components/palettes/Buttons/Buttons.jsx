import React from 'react';
import styled from 'styled-components';
import ButtonLike from './ButtonLike';
import ButtonSave from './ButtonSave';
import ButtonMore from './ButtonMore';

const Buttons = ({ palette }) => (
  <Wrapper>
    <ButtonSave paletteId={palette.id} />
    <ButtonLike paletteId={palette.id} />
    <ButtonMore paletteId={palette.id} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

export default Buttons;
