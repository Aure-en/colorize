import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPalette, getShades } from '../reducers/palette';
import Palette from '../components/palette/Palette';
import ShadesTable from '../components/shades/ShadesTable';
import { setShades } from '../actions/palette';

const Creation = () => {
  const dispatch = useDispatch();
  const palette = useSelector(getPalette);
  const shades = useSelector(getShades);

  useEffect(() => {
    if (palette.colors.length > 0) dispatch(setShades());
  }, [palette]);

  return (
    <div>
      <ShadesTable mainPalette={palette} shades={shades} />
    </div>
  );
};

export default Creation;
