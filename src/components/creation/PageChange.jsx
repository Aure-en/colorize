import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDropdown from '../../hooks/useDropdown';

const PageChange = ({ currentPage, pages, setCurrentPage }) => {
  const ref = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);

  const pagesWithoutCurrent = (() => pages.filter((page) => page !== currentPage))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentPage}
        {' '}
        &#9660; {/* Caret down */}
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {pagesWithoutCurrent.map((page) => (
            <Button
              type="button"
              onClick={() => {
                setCurrentPage(page);
                setIsDropdownOpen(false);
              }}
              key={page}
            >
              {page}
            </Button>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};

PageChange.propTypes = {
  currentPage: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

const Dropdown = styled.div`
  position: absolute;
  display: inline-block;
  right: 2rem; // Creation page padding
  top: 2rem; // Creation page padding
  z-index: 5;
  padding: 0.5rem 0;
  font-weight: 300;
  text-align: center;
  min-width: 6rem;
`;

const DropdownHeader = styled.button`
  display: flex;
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

export default PageChange;
