import React from 'react';
import styled from 'styled-components';
import Add from './Add';
import CollectionsList from './CollectionsList';

const Nav = () => (
  <Wrapper>
    <Add />
    <CollectionsList />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

export default Nav;
