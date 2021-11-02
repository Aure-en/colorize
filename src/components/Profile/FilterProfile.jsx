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
`;

export default Filter;
