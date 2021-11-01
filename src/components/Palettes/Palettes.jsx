import React from 'react';
import { useSelector } from 'react-redux';
import { getPalettes } from '../../selectors/palettes';
import CardsList from './CardsList';

const Palettes = () => {
  const palettes = useSelector(getPalettes);

  return (
    <CardsList palettes={palettes} />
  );
};

export default Palettes;
