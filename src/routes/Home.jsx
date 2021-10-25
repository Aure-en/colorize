import React from 'react';
import Cards from '../components/palettes/Cards';
import palettes from '../data/palettes';

const Home = () => (
  <div>
    <Cards palettes={palettes} />
  </div>
);

export default Home;
