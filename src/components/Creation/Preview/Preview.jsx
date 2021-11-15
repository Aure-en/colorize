import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Palette from '../../Palette/Palette';
import Informations from '../../Palette/Informations';
import PageChange from '../PageChange';
import GenerateButton from '../Controls/GenerateButton';
import ResetButton from '../Controls/ResetButton';
import SaveButton from '../Controls/SaveButton';
import AddColor from '../Controls/AddColor';
import More from '../More/More';
import ExtractInput from '../Extract/ExtractInput';

import Buttons from './Buttons';
import Previews from './Previews';

import { getMainPalette } from '../../../selectors/palette';

import useWindowSize from '../../../hooks/shared/useWindowSize';

const Preview = () => {
  const [slide, setSlide] = useState({
    number: 1,
    direction: 'next', // 'prev' | 'next'
  });

  const palette = useSelector(getMainPalette);

  const windowSize = useWindowSize();

  const TOTAL_PREVIEWS = 5;

  let throttle = false;

  const prevPreview = () => {
    setSlide((prev) => ({
      number: prev.number === 1 ? TOTAL_PREVIEWS : prev.number - 1,
      direction: 'prev',
    }));
  };

  const nextPreview = () => {
    setSlide((prev) => ({
      number: prev.number === TOTAL_PREVIEWS ? 1 : prev.number + 1,
      direction: 'next',
    }));
  };

  const onMouseWheel = (e) => {
    if (!throttle) {
      e.stopPropagation();
      if (e.deltaY > 0) {
        nextPreview();
      } else {
        prevPreview();
      }
      throttle = true;
      setTimeout(() => {
        throttle = false;
      }, 300);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevPreview();
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextPreview();
  };

  useEffect(() => {
    if (windowSize.width > 900) {
      window.addEventListener('wheel', onMouseWheel);
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('wheel', onMouseWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [windowSize.width]);

  return (
    <Wrapper>
      <PaletteWrapper>
        <Palette palette={palette} direction="vertical" />
        {palette.colors.length < 5 && <AddColor />}
      </PaletteWrapper>

      <Controls>
        <GenerateButton />
        <ResetButton />
        <ExtractInput />
      </Controls>

      <PageChangeWrapper>
        <PageChange />
      </PageChangeWrapper>

      <Previews
        number={slide.number}
        direction={slide.direction}
        hasTransitions={windowSize.width > 900}
      />

      {palette.id !== null && (
        <Informations name={palette.name} author={palette.owner} />
      )}

      <Save>
        {palette.id !== null && <More palette={palette} />}
        <SaveButton />
      </Save>

      <SlidesButtons>
        <Buttons
          select={(number) => setSlide((prev) => ({ ...prev, number }))}
          total={TOTAL_PREVIEWS}
          current={slide.number}
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
  grid-template-rows: repeat(2, auto) 1fr auto auto;
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-gap: 1rem;

  @media all and (min-width: 900px) {
    grid-row: 1 / span 2;
    grid-column: 1;
    display: flex;
    flex-direction: column;
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
  grid-row: 5;
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
  grid-row: 5;
  grid-column: 1 / span 2;
  display: flex;

  @media all and (min-width: 500px) {
    justify-content: center;
  }

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

export default Preview;
