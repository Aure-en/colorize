import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getThemes } from '../../selectors/themes';
import { updateSortBy, updateFilterBy } from '../../actions/settings';
import { getSortBy, getFilterBy } from '../../selectors/settings';

import SearchBar from '../Shared/SearchBar';

const LeftNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const themes = useSelector(getThemes);
  const sortBy = useSelector(getSortBy);
  const filterBy = useSelector(getFilterBy);

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
  const filters = [
    {
      name: 'all',
      value: 0,
    },
    {
      name: 'generated',
      value: 1,
    },
    {
      name: 'creations',
      value: 2,
    },
  ];

  return (
    <Nav>
      <SearchBar />
      <NavMenu>
        {sorts.map((sort) => (
          <Button
            type="button"
            onClick={() => dispatch(updateSortBy(sort.value))}
            $selected={sortBy === sort.value}
            key={sort.value}
          >
            {sort.name}
          </Button>
        ))}
        <Line />
        {filters.map((filter) => (
          <Button
            type="button"
            onClick={() => dispatch(updateFilterBy(filter.value))}
            $selected={filterBy === filter.value}
            key={filter.value}
          >
            {filter.name}
          </Button>
        ))}
        <Line />
        <NavLink to="/" $selected={pathname === '/'}>
          Any
        </NavLink>
        {themes.map((theme) => (
          <NavLink
            to={`/themes/${theme.id}`}
            key={theme.id}
            $selected={pathname === `/themes/${theme.id}`}
          >
            {theme.name}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  text-transform: capitalize;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: ${(props) => props.$selected && props.theme.primaryBackground};
  border-radius: 5px;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const Button = styled.button`
  color: ${(props) => props.theme.textPrimary};
  text-transform: capitalize;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  text-align: start;
  background: ${(props) => props.$selected && props.theme.primaryBackground};
  border-radius: 5px;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${(props) => props.theme.primaryText} 50%,
    transparent 100%
  );
`;

export default LeftNav;
