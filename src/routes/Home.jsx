import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/shared/Pagination';

const Home = () => (
  <>
    <Wrapper>
      <LeftNav />
      <Palettes />
    </Wrapper>
    <Pagination />
  </>
);

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
