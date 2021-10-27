import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Palette from '../../palette/Palette';
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
      <Colors>
        <Palette palette={palette} direction="vertical" />
        <Controls>
          <GenerateButton />
          <ResetButton />
        </Controls>
      </Colors>
      <Previews>
        {preview(currentPreview)}
      </Previews>
      <Buttons
        select={setCurrentPreview}
        total={TOTAL_PREVIEW}
        current={currentPreview}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
  min-height: 100vh;
  padding: 1rem;
  overflow: hidden;

  @media all and (min-width: 600px) {
    grid-template-columns: 12rem 1fr auto;
    grid-template-rows: initial;
    grid-gap: 2rem;
  }

  @media all and (min-width: 900px) {
    grid-gap: 3rem;
    padding: 3rem;
  }
`;

const Colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
`;

const Previews = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default Preview;
