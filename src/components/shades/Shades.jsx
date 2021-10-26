import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getPalette, getShades, getShadesNumber } from '../../reducers/palette';
import ShadesTable from './ShadesTable';
import ShadesButtons from './buttons/ShadesButtons';
import { setShades } from '../../actions/palette';

const Shades = () => {
  const dispatch = useDispatch();
  const palette = useSelector(getPalette);
  const shades = useSelector(getShades);
  const shadesNumber = useSelector(getShadesNumber);

  useEffect(() => {
    if (palette.colors.length > 0) dispatch(setShades());
  }, [shadesNumber]);

  return (
    <Wrapper>
      <ShadesButtons />
      <ShadesTable mainPalette={palette} shades={shades} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  flex: 1;
`;

export default Shades;
