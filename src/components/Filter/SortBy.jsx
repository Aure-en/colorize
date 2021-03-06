import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useDropdown from '../../hooks/shared/useDropdown';
import { getSortBy } from '../../selectors/settings';
import { updateSortBy } from '../../actions/settings';

const SortBy = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);

  const sorts = [
    {
      name: 'popular',
      value: 'save',
    },
    {
      name: 'new',
      value: 'new',
    },
  ];

  const currentSort = useSelector(getSortBy);
  const currentSortName = (() => sorts.find((sort) => sort.value === currentSort))();
  const sortWithoutCurrent = (() => sorts.filter((sort) => sort.name !== currentSort.name))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentSortName.name}
        {' '}
        &#9660; {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {sortWithoutCurrent.map((sort) => (
            <Button
              type="button"
              onClick={() => { dispatch(updateSortBy(sort.value)); }}
              key={sort.value}
            >
              {sort.name}
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

export default SortBy;
