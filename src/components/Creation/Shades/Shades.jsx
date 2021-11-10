import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setShades } from '../../../actions/palette';
import { getMainPalette, getShades, getShadesNumber } from '../../../selectors/palette';

import PageChange from '../PageChange';
import ShadesTable from './ShadesTable';
import ShadesButtons from './buttons/ShadesButtons';
import ExtractInput from '../Extract/ExtractInput';
import GenerateButton from '../Controls/GenerateButton';
import ResetButton from '../Controls/ResetButton';
import SaveButton from '../Controls/SaveButton';
import More from '../More/More';

const Shades = () => {
  const dispatch = useDispatch();
  const palette = useSelector(getMainPalette);
  const shades = useSelector(getShades);
  const shadesNumber = useSelector(getShadesNumber);

  useEffect(() => {
    if (palette.colors.length > 0) dispatch(setShades(palette));
  }, [shadesNumber]);

  return (
    <Wrapper>
      <Buttons>
        <GenerateButton />
        <ResetButton />
        <ExtractInput />
      </Buttons>

      <PageChangeWrapper>
        <PageChange />
      </PageChangeWrapper>

      <ShadesButtons />

      <ShadesTable mainPalette={palette} shades={shades} />

      <Save>
        {palette.id !== null && <More palette={palette} />}
        <SaveButton />
      </Save>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  padding: 1rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: repeat(2, auto);

  @media all and (min-width: 900px) {
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
    padding: 1rem 3rem;
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
