import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getThemes } from '../../selectors/themes';
import { updateSortBy, updateFilterBy } from '../../actions/palettes';
import { getSortBy, getFilterBy } from '../../selectors/palettes';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const LeftNav = () => {
  const dispatch = useDispatch();
  const themes = useSelector(getThemes);

  const sortBy = useSelector(getSortBy);
  const filterBy = useSelector(getFilterBy);

  const sorts = ['popular', 'new'];
  const filters = ['all', 'generated', 'creations'];

  return (
    <Nav>
      <Searchbar to="/">
        <Input type="Search" placeholder="Search" />
        <Btn>
          <SearchIcon className="search-icon" />
        </Btn>
      </Searchbar>
      <NavMenu>
        {sorts.map((sort) => (
          <Button
            type="button"
            onClick={() => dispatch(updateSortBy(sort))}
            $selected={sortBy === sort}
          >
            {sort}
          </Button>
        ))}
        <Line />
        {filters.map((filter) => (
          <Button
            type="button"
            onClick={() => dispatch(updateFilterBy(filter))}
            $selected={filterBy === filter}
          >
            {filter}
          </Button>
        ))}
        <Line />
        {themes.map((theme) => (
          <NavLink to={`/themes/${theme.id}`}>{theme.name}</NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  text-transform: capitalize;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

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

const Searchbar = styled.div`
  padding-bottom: 25px;
  display: flex;
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: 2em;
  }
`;

const Input = styled.input`
  height: 40px;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 30px;
    border: none;
  }
`;

const Btn = styled.button`
  display: flex;
  padding-left: 0.3rem;
  padding-top: 0.1rem;
  .search-icon {
    stroke: ${(props) => props.theme.textPrimary};
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
