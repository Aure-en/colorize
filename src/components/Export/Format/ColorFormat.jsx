import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import useDropdown from '../../../hooks/shared/useDropdown';

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

      <Transition
        in={isDropdownOpen}
        timeout={{
          enter: 0,
          exit: 500,
        }}
        mountOnEnter={false}
        unmountOnExit
      >
        {(state) => (
          <DropdownList $entered={state === 'entered'}>
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
      </Transition>
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
  color: ${(props) => props.theme.textPrimary};

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
  width: 110%;
  padding: ${(props) => (props.$entered ? '0.25rem 0' : 0)};
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => (props.$entered ? props.theme.textPrimary : 'transparent')};
  max-height: ${(props) => (props.$entered ? '10rem' : 0)};
  transition: all 0.5s ease;
  overflow: hidden;
`;

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
`;

export default ColorFormat;
