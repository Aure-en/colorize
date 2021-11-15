import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import useDropdown from '../../hooks/shared/useDropdown';

const Pagination = ({ numberOfPages, currentPage, search }) => {
  // Dropdown
  const ref = useRef();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);

  if (numberOfPages < 2) {
    return <></>;
  }

  return (
    <Wrapper>
      {currentPage > 1 && <ButtonLink to={`/search?search=${search}&page=${currentPage - 1}`}>&#9668;</ButtonLink>}
      {/* ◄ = &#9668; */}

      <Dropdown ref={ref}>
        <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {currentPage}
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
              {[...Array(numberOfPages).keys()].map((page) => page + 1).map((page) => (
                <PageLink to={`/search?search=${search}&page=${page}`} key={page}>{page}</PageLink>
              ))}
            </DropdownList>
          )}
        </Transition>
      </Dropdown>

      {currentPage < numberOfPages && <ButtonLink to={`/search?search=${search}&page=${currentPage + 1}`}>&#9658;</ButtonLink>}
      {/* ► = &#9658; */}
    </Wrapper>
  );
};

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
  numberOfPages: 3,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;

  & > a {
    padding: 0.5rem;
  }
`;

const Dropdown = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
`;

const DropdownHeader = styled.button`
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const DropdownList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 10rem;
  overflow: auto;
  bottom: 2.25rem;
  left: 0;
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.textPrimary};
  min-width: 100%;
  padding: 0.25rem 0;
  opacity: ${(props) => (props.$entered ? 1 : 0)};
  transform: translateY(${(props) => (props.$entered ? '0' : '15%')});
  transition: transform 0.5s ease, opacity 0.25s ease;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background-color: ${(props) => props.theme.primary};
  }
`;

const ButtonLink = styled(Link)`
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const PageLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.textPrimary};
  padding: 0.25rem;
  width: 100%;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.primaryText};
    background: ${(props) => props.theme.primaryBackground};
  }
`;

export default Pagination;
