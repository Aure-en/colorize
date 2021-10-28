import React from 'react';
import { useSelector } from 'react-redux';
import { getPalettes } from '../../selectors/palettes';
import CardsList from './CardsList';

const Palettes = () => {
  const palettes = useSelector(getPalettes);

  return (
    <div>
      <CardsList palettes={palettes} />
    </div>
  );
};

export default Palettes;
