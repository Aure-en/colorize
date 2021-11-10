import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Collections/Nav/Nav';
import List from '../components/Collections/List/List';

const Collections = () => (
  <Wrapper>
    <Nav />
    <Main>
      <Heading>Collections</Heading>
      <List />
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-gap: 3rem;
    padding: 3rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media all and (min-width: 768px) {
    align-self: start;
  }
`;

export default Collections;
