import React from 'react';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/shared/Pagination';

const Home = () => (
  <div>
    <LeftNav />
    <Palettes />
    <Pagination />
  </div>
);

export default Home;
