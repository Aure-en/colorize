import React from 'react';
import { useSelector } from 'react-redux';
import { getPalettes } from '../reducers/paletteReducer';
import Cards from '../components/palettes/Cards';

const Home = () => {
  const palettes = useSelector(getPalettes);

  return (
    <div>
      <Cards palettes={palettes} />
    </div>
  );
};

export default Home;
