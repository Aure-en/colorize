import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonSave from './ButtonSave';
import DropdownSave from './DropdownSave';

const Save = ({ paletteId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {isDropdownOpen && (
        <DropdownSave
          paletteId={paletteId}
          closeDropdown={() => setIsDropdownOpen(false)}
        />
      )}
      <ButtonSave paletteId={paletteId} />
    </Wrapper>
  );
};

Save.propTypes = {
  paletteId: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export default Save;
