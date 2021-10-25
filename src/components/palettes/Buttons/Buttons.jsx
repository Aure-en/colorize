import React from 'react';
import styled from 'styled-components';
import ButtonLike from './ButtonLike';
import IconBookmark from '../../../assets/icons/card/IconBookmark';

import { ReactComponent as IconDots } from '../../../assets/icons/card/dots.svg';

const Buttons = ({ palette }) => (
  <Wrapper>
    <button type="button">
      <IconBookmark />
    </button>
    <ButtonLike paletteId={palette.id} />
    <button type="button">
      <IconDots />
    </button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

export default Buttons;
