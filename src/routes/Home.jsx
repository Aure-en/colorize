import React from 'react';
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

export default Home;
