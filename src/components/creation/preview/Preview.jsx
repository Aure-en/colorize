import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Palette from '../../palette/Palette';
import PageChange from '../PageChange';
import ExtractInput from '../extract/ExtractInput';
import GenerateButton from '../../palette/buttons/GenerateButton';
import ResetButton from '../../palette/buttons/ResetButton';
import SaveButton from '../../palette/buttons/SaveButton';
import Center from './Center';
import Cover from './Cover';
import Triangles from './Triangles';
import Leaves from './Leaves';
import Corner from './Corner';
import Buttons from './Buttons';
import { getPalette } from '../../../reducers/palette';

const preview = (number) => {
  switch (number) {
    case 1:
      return <Center />;
    case 2:
      return <Triangles />;
    case 3:
      return <Cover />;
    case 4:
      return <Leaves />;
    case 5:
      return <Corner />;
    default:
      return <></>;
  }
};

const Preview = () => {
  const TOTAL_PREVIEW = 5;
  const [currentPreview, setCurrentPreview] = useState(1);
  const palette = useSelector(getPalette);

  return (
    <Wrapper>
      <PaletteWrapper>
        <Palette palette={palette} direction="vertical" />
      </PaletteWrapper>

      <Controls>
        <GenerateButton />
        <ResetButton />
        <ExtractInput />
      </Controls>

      <PageChangeWrapper>
        <PageChange />
      </PageChangeWrapper>

      <Previews>
        {preview(currentPreview)}
      </Previews>

      <Save>
        <SaveButton />
      </Save>

      <ButtonsWrapper>
        <Buttons
          select={setCurrentPreview}
          total={TOTAL_PREVIEW}
          current={currentPreview}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 100%;
  padding: 1rem;
  grid-gap: 1rem;
  grid-template-rows: repeat(2, auto) 1fr auto;
  grid-template-columns: 1fr 
  flex: 1;

  @media all and (min-width: 900px) {
    grid-template-columns: 10rem 1fr auto;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
  }
`;

const PaletteWrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / span 2;

  @media all and (min-width: 900px) {
    grid-row: 1 / span 2;
    grid-column: 1;
    display: flex;
    align-items: center;
  }
`;

const PageChangeWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;

  @media all and (min-width: 900px) {
    grid-row: 1;
    grid-column: 3;
  }
`;

const Save = styled.div`
  grid-row: 4;
  grid-column: 2;
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  @media all and (min-width: 900px) {
    position: relative;
    grid-row: 3;
    grid-column: 3;
    right: initial;
    bottom: initial;
  }
`;

const ButtonsWrapper = styled.div`
  grid-row: 4;
  grid-column: 1 / span 2;
  display: flex;
  justify-content: center;

  @media all and (min-width: 900px) {
    grid-column: -1;
    grid-row: 1 / 4;
  }
`;

const Controls = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 1;

  @media all and (min-width: 900px) {
    grid-row: 3;
    grid-column: 1;
    justify-content: center;
  }
`;

const Previews = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  grid-row: 3;
  grid-column: 1 / span 2;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 900px) {
    grid-row: 2;
    grid-column: 2 / span 2;
  }
`;

export default Preview;
