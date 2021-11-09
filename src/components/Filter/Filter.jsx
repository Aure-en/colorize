import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import FilterBy from './FilterBy';
import Themes from './Themes';

const Filter = () => (
  <FilterContainer>
    <SortBy />
    <FilterBy />
    <Themes />
  </FilterContainer>
);

const FilterContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding-left: 2em;
@media screen and (min-width: 768px) {
    display:none
   }
`;

export default Filter;
