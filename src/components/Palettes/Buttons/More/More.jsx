import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDropdown from '../../../../hooks/shared/useDropdown';
import Button from './Button';
import Menu from './Menu';

const More = ({ palette }) => {
  const dropdownRef = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(dropdownRef);

  return (
    <Wrapper ref={dropdownRef}>
      <Button toggleMenu={() => setIsDropdownOpen(!isDropdownOpen)} />
      <Menu
        palette={palette}
        isOpen={isDropdownOpen}
        closeMenu={() => setIsDropdownOpen(false)}
      />
    </Wrapper>
  );
};

More.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired),
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired),
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

const Wrapper = styled.div`
  position: relative;
`;

export default More;
