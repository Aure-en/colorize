import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useDropdown from '../../../hooks/shared/useDropdown';

import Button from '../../Palettes/Buttons/More/Button';
import Menu from './Menu';

const More = ({ palette }) => {
  const dropdownRef = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(dropdownRef);

  return (
    <Wrapper ref={dropdownRef}>
      <Button toggleMenu={() => setIsDropdownOpen(!isDropdownOpen)} />
      {isDropdownOpen && (
        <Menu palette={palette} closeMenu={() => setIsDropdownOpen(false)} />
      )}
    </Wrapper>
  );
};

More.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number,
    colors: PropTypes.arrayOf(
      PropTypes.shape({}).isRequired,
    ).isRequired,
  }).isRequired,
};

const Wrapper = styled.div`
  position: relative;
`;

export default More;
