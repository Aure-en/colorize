import React from 'react';
import styled from 'styled-components';
import useSearch from '../../hooks/shared/useSearch';
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';

const SearchBar = () => {
  const { search, setSearch, handleSubmit } = useSearch();

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
    >
      <Label htmlFor="search">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Label>
      <Button type="submit" aria-label="Search">
        <IconSearch className="search-icon" />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  margin: 0.5rem 0 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.primaryText};
  border-radius: 2px;
`;

const Label = styled.label`
  min-width: 0;
  flex: 1;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  height: 100%;
  max-width: 100%;

  &:focus {
    outline: 2px solid transparent;
  }
`;

const Button = styled.button`
  padding: 0;
  border: 2px solid transparent;
  color: ${(props) => props.theme.textPrimary};
`;

export default SearchBar;
