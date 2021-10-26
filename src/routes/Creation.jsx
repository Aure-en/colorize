import React from 'react';
import { useSelector } from 'react-redux';
import { getPalette } from '../reducers/palette';
import Palette from '../components/palette/Palette';

const Creation = () => {
  const palette = useSelector(getPalette);

  return (
    <div>
      <Palette palette={palette} />
    </div>
  );
};

export default Creation;
