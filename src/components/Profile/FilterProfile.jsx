import React from 'react';
import styled from 'styled-components';
import SortBy from '../Filter/SortBy';
import FilterBy from '../Filter/FilterBy';

const Filter = () => (
  <FilterContainer>
    <SortBy />
    <FilterBy />
  </FilterContainer>
);

const FilterContainer = styled.div`
display: flex;
@media screen and (max-width: 768px) {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2em;
  margin-left: 4em;
 }
`;

export default Filter;
