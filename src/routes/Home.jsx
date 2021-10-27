import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/shared/Pagination';
import Navbar from '../components/Navbar/Navbar';

const Home = () => (
  <Wrapper>
    <Navbar />
    <LeftNav />
    <Palettes />
    <Pagination />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default Home;
