import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/shared/Pagination';
import Carousel from '../components/Carousel/Carousel';

const Home = () => (
  <>
    <Wrapper>
      <LeftNav />
      <Palettes />
    </Wrapper>
    <Pagination />
    <Carousel />
  </>
);

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
