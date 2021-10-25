import React from 'react';
import Header from '../components/header/Header';
import Cards from '../components/palettes/Cards';
import palettes from '../data/palettes';

const Home = () => (
  <div>
    <Header />
    <Cards palettes={palettes} />
  </div>
);

export default Home;
