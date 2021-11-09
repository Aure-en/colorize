import React from 'react';
import styled from 'styled-components';
import SortBy from '../Filter/SortBy';

const Filter = () => (
  <FilterContainer>
    <SortBy />
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
