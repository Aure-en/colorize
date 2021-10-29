import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Collections/Nav/Nav';
import List from '../components/Collections/List/List';

const Collections = () => (
  <Wrapper>
    <Nav />
    <List />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;

export default Collections;
