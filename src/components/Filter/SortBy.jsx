import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useDropdown from '../../hooks/useDropdown';
import { getSortBy } from '../../reducers/palettes';
import { updateSortBy } from '../../actions/palettes';

const SortBy = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const sorts = ['popular', 'saved', 'new'];
  const currentSort = useSelector(getSortBy);
  const sortWithoutCurrent = (() => sorts.filter((sort) => sort !== currentSort))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentSort}
        {' '}
        &#9660; {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {sortWithoutCurrent.map((sort) => (
            <Button
              type="button"
              onClick={() => { dispatch(updateSortBy(sort)); }}
              key={sort}
            >
              {sort}
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
  min-width: 6rem;
  justify-self: end;
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
  border: 1px solid ${(props) => props.theme.text_primary};
  z-index: 5;
  width: 100%;
  background: ${(props) => props.theme.background};
  padding: 0.25rem 0;
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

export default SortBy;
