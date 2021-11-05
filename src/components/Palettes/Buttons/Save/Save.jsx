import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../../../selectors/user';

import ButtonSave from './ButtonSave';
import DropdownSave from './DropdownSave';

const Save = ({ paletteId }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {isLoggedIn && isDropdownOpen && (
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
