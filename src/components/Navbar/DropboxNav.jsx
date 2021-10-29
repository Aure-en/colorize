import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useDropdown from '../../hooks/shared/useDropdown';
import { getFormat } from '../../selectors/settings';
import { updateFormat } from '../../actions/settings';

const DropboxNav = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const formats = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];
  const currentFormat = useSelector(getFormat);
  const formatWithoutCurrent = (() => formats.filter((format) => format !== currentFormat))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentFormat}
        {' '}
        &#9660;
        {' '}
        {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {formatWithoutCurrent.map((format) => (
            <Button
              type="button"
              onClick={() => { dispatch(updateFormat(format)); }}
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

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
  padding: 0.8rem 0.5rem;
  font-weight: 300;
  text-align: center;
  min-width: 6rem;
  justify-self: end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownHeader = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-weight: 300;
  text-transform: capitalize;
  color: ${(props) => props.theme.background};

  & > svg {
    margin-left: 0.25rem;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.backgroundColorNav};
  z-index: 10;
  width: 100%;
  background: ${(props) => props.theme.backgroundColorNav};
  padding: 0.25rem 0;
`;

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme.background};

  &:hover {
    background: ${(props) => props.theme.secondary}15; // (color with 0.15 opacity)
  }
`;

export default DropboxNav;
