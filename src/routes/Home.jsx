import React from 'react';
import Cards from '../components/palettes/Cards';
import palettes from '../data/palettes';
import Navbar from '../components/Navbar/Navbar';

const Home = () => (
  <div>
    <Navbar />
    <Cards palettes={palettes} />
  </div>
);

export default Home;
