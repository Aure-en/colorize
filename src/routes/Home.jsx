import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';

const Home = () => (
  <Wrapper>
    <LeftNav />
    <Palettes />
  </Wrapper>
);

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
