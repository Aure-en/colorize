import React from 'react';
import styled from 'styled-components';

const Filter = () => (
  <FilterContainer>
    <DropdownFilterPopular>
      <DropdownText value="Popular">
        Popular
      </DropdownText>
      <DropdownText value="Saved">
        Saved
      </DropdownText>
      <DropdownText value="New">
        New
      </DropdownText>
    </DropdownFilterPopular>
    <DropdownFilterAll>
      <DropdownText value="All">
        All
      </DropdownText>
      <DropdownText value="Generated">
        Generated
      </DropdownText>
      <DropdownText value="User Submissions">
        User Submissions
      </DropdownText>
    </DropdownFilterAll>
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

const DropdownFilterPopular = styled.select`

`;

const DropdownText = styled.option`
`;

const DropdownFilterAll = styled.select`
`;
export default Filter;
