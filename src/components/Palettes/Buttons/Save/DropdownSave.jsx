import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Menu from './Menu';

const DropdownSave = ({ paletteId, closeDropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Button type="button">&#9660;</Button>
      <Menu
        paletteId={paletteId}
        isOpen={isDropdownOpen}
        close={() => {
          setIsDropdownOpen(false);
          closeDropdown();
        }}
      />
    </Wrapper>
  );
};

DropdownSave.propTypes = {
  paletteId: PropTypes.number.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  color: ${(props) => props.theme.primaryText};
`;

export default DropdownSave;
