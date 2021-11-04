import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Palette from '../../Palette/Palette';
import PageChange from '../PageChange';
import GenerateButton from '../../Palette/Buttons/GenerateButton';
import ResetButton from '../../Palette/Buttons/ResetButton';
import SaveButton from '../../Palette/Buttons/SaveButton';
import More from '../More/More';
import ExtractInput from '../Extract/ExtractInput';

import Center from './Center';
import Cover from './Cover';
import Triangles from './Triangles';
import Leaves from './Leaves';
import Corner from './Corner';
import Buttons from './Buttons';

import { getPalette } from '../../../selectors/palette';

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
        {palette.id !== null && <More palette={palette} />}
        <SaveButton />
      </Save>

      <SlidesButtons>
        <Buttons
          select={setCurrentPreview}
          total={TOTAL_PREVIEW}
          current={currentPreview}
        />
      </SlidesButtons>
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
    grid-column-gap: 3rem;
    overflow: hidden;
    padding: 1rem 3rem;
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
  display: flex;
  align-items: center;
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

const SlidesButtons = styled.div`
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
  grid-row: 3;
  grid-column: 1 / span 2;

  & > div {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 900px) {
    grid-row: 2;
    grid-column: 2 / span 2;
  }

  @media all and (min-width: 768px) {
    & > div {
      position: absolute;
    }
  }
`;

export default Preview;
