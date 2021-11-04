import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../../Palettes/Buttons/Save/Menu';

const Save = ({ paletteId, closeMenu }) => {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsCollectionsOpen(true)}
      onMouseLeave={() => setIsCollectionsOpen(false)}
    >
      <button type="button">
        {/* &#9664; is ◀ */}
        <Arrow>&#9664;</Arrow>
        {' '}
        Save Palette
      </button>

      {isCollectionsOpen && (
      <Menu
        paletteId={paletteId}
        close={() => {
          setIsCollectionsOpen(false);
          closeMenu();
        }}
        position="left"
      />
      )}
    </Wrapper>
  );
};

Save.propTypes = {
  paletteId: PropTypes.number.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.span`
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
  color: ${(props) => props.theme.primaryText};
  font-size: 0.825rem;
`;

export default Save;
