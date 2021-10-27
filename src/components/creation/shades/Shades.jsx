import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getPalette, getShades, getShadesNumber } from '../../../reducers/palette';
import ShadesTable from './ShadesTable';
import ShadesButtons from './buttons/ShadesButtons';
import GenerateButton from '../../palette/buttons/GenerateButton';
import ResetButton from '../../palette/buttons/ResetButton';
import SaveButton from '../../palette/buttons/SaveButton';

import { setShades } from '../../../actions/palette';
import PageChange from '../PageChange';

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
      <Buttons>
        <GenerateButton />
        <ResetButton />
      </Buttons>

      <PageChangeWrapper>
        <PageChange />
      </PageChangeWrapper>

      <ShadesButtons />

      <ShadesTable mainPalette={palette} shades={shades} />

      <Save>
        <SaveButton />
      </Save>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  padding: 1rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: repeat(2, auto);

  @media all and (min-width: 900px) {
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
  }
`;

const PageChangeWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 3;
  grid-column: 2;
`;

const Buttons = styled.div`
  display: flex;

  @media all and (min-width: 900px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export default Shades;
