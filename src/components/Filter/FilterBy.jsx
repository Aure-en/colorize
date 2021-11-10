import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useDropdown from '../../hooks/shared/useDropdown';
import { getFilterBy } from '../../selectors/settings';
import { updateFilterBy } from '../../actions/settings';

const FilterBy = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const filters = ['all', 'generated', 'user submissions'];
  const currentFilter = useSelector(getFilterBy);
  const filterWithoutCurrent = (() => filters.filter((filter) => filter !== currentFilter))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentFilter}
        {' '}
        &#9660; {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {filterWithoutCurrent.map((filter) => (
            <Button
              type="button"
              onClick={() => { dispatch(updateFilterBy(filter)); }}
              key={filter}
            >
              {filter}
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

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primaryBackground}; // (color with 0.15 opacity)
  }
`;

export default FilterBy;
