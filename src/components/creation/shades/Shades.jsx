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
      <Top>
        <LeftButtons>
          <GenerateButton />
          <ResetButton />
        </LeftButtons>
        <PageChange />
      </Top>

      <Main>
        <ShadesButtons />
        <ShadesTable mainPalette={palette} shades={shades} />
      </Main>

      <SaveButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding: 2rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftButtons = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  flex: 1;
`;

export default Shades;
