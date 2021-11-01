import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDropdown from '../../../../hooks/shared/useDropdown';

const ColorFormat = ({ format, setFormat }) => {
  const ref = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const formats = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {format}
        {' '}
        &#9660;
        {' '}
        {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {formats.map((format) => (
            <Button
              type="button"
              onClick={() => { setFormat(format); }}
              key={format}
            >
              {format}
            </Button>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};

ColorFormat.propTypes = {
  format: PropTypes.string.isRequired,
  setFormat: PropTypes.func.isRequired,
};

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.8rem 0.5rem;
  text-align: center;
`;

const DropdownHeader = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-weight: 300;
  text-transform: capitalize;

  & > svg {
    margin-left: 0.25rem;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  padding: 0.25rem 0;
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.textPrimary};
`;

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;

  &:hover {
    background: ${(props) => props.theme.secondary}15; // (color with 0.15 opacity)
  }
`;

export default ColorFormat;
