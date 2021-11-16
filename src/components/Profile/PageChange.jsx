import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import { Link } from 'react-router-dom';
import useDropdown from '../../hooks/shared/useDropdown';

import { getUser } from '../../selectors/user';

const PageChange = ({ currentPage }) => {
  const ref = useRef();
  const user = useSelector(getUser);
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);

  const pages = [{
    name: 'creations',
    to: `/users/${user.id}`,
  }, {
    name: 'likes',
    to: `/users/${user.id}/likes`,
  }];

  const pagesWithoutCurrent = (() => pages.filter((page) => page.name !== currentPage))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentPage}
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
            {pagesWithoutCurrent.map((page) => (
              <ProfileLink
                to={page.to}
                key={page.name}
              >
                {page.name}
              </ProfileLink>
            ))}
          </DropdownList>
        )}
      </Transition>
    </Dropdown>
  );
};

PageChange.propTypes = {
  currentPage: PropTypes.string.isRequired,
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
  z-index: 10;
  min-width: 5rem;
  padding: ${(props) => (props.$entered ? '0.25rem 0' : 0)};
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => (props.$entered ? props.theme.textPrimary : 'transparent')};
  max-height: ${(props) => (props.$entered ? '5rem' : 0)};
  transition: all 0.5s ease;
  overflow: hidden;
`;

const ProfileLink = styled(Link)`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme.textPrimary};
  white-space: nowrap;

  &:hover {
    background: ${(props) => props.theme.secondaryBackground};
  }
`;

export default PageChange;
