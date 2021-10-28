import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import FilterBy from './FilterBy';

const Filter = () => (
  <FilterContainer>
    <SortBy />
    <FilterBy />
  </FilterContainer>
);

const FilterContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding: 2em;
@media screen and (min-width: 768px) {
    display:none
   }
`;

export default Filter;
