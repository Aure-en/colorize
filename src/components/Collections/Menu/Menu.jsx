import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useDropdown from '../../../hooks/shared/useDropdown';

import Button from './Button';
import Dropdown from './Dropdown';

const Menu = ({ collection }) => {
  const dropdownRef = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(dropdownRef);

  return (
    <Wrapper ref={dropdownRef}>
      <Button toggleMenu={() => setIsDropdownOpen(!isDropdownOpen)} />
      {isDropdownOpen && (
        <Dropdown
          close={() => setIsDropdownOpen(false)}
          collection={collection}
        />
      )}
    </Wrapper>
  );
};

Menu.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Wrapper = styled.div`
  position: relative;
`;

export default Menu;
