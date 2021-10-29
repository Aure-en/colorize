import React from 'react';
import styled from 'styled-components';
import Nav from '../components/collections/nav/Nav';
import List from '../components/collections/list/List';

const Collections = () => {
  return (
    <Wrapper>
      <Nav />
      <List />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;

export default Collections;
