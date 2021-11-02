import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/Palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
import Carousel from '../components/Carousel/Carousel';
import Filter from '../components/Filter/Filter';

const Home = () => (
  <>
    <Wrapper>
      <LeftNav />
      <Filter />
      <Carousel />
      <Palettes />
    </Wrapper>
    <Pagination />
  </>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 3rem;
    padding: 3rem;
  }
`;

export default Home;
