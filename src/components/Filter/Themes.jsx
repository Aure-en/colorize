import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useDropdown from '../../hooks/shared/useDropdown';

import { getThemes } from '../../selectors/themes';

const Themes = () => {
  const ref = useRef();
  const themes = useSelector(getThemes);
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Themes
        &#9660; {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {themes.map((theme) => (
            <ThemeLink
              type="button"
              key={theme.id}
              to={`/themes/${theme.id}`}
            >
              {theme.name}
            </ThemeLink>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
  padding: 0.5rem 0;
  font-weight: 300;
  text-align: center;
  justify-self: end;
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
  border: 1px solid ${(props) => props.theme.textPrimary};
  z-index: 5;
  min-width: 100%;
  background: ${(props) => props.theme.background};
  padding: 0.25rem 0;
`;

const ThemeLink = styled(Link)`
  display: inline-block;
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.3rem 0.5rem;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primaryBackground}; // (color with 0.15 opacity)
  }
`;

export default Themes;
