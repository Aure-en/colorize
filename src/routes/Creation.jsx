import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPalette, getShades, getShadesNumber } from '../reducers/palette';
import ShadesTable from '../components/shades/ShadesTable';
import ShadesButtons from '../components/shades/buttons/ShadesButtons';
import { setShades } from '../actions/palette';

const Creation = () => {
  const dispatch = useDispatch();
  const palette = useSelector(getPalette);
  const shades = useSelector(getShades);
  const shadesNumber = useSelector(getShadesNumber);

  useEffect(() => {
    if (palette.colors.length > 0) dispatch(setShades());
  }, [palette, shadesNumber]);

  return (
    <div>
      <ShadesButtons />
      <ShadesTable mainPalette={palette} shades={shades} />
    </div>
  );
};

export default Creation;
