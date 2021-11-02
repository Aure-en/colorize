import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Shades from '../components/Creation/Shades/Shades';
import Preview from '../components/Creation/Preview/Preview';
import { getCreationPage } from '../selectors/settings';
import { getPalette } from '../selectors/palettes';
import { setOriginalPalette, setPalette, setShades } from '../actions/palette';

const Palette = ({ match }) => {
  const { paletteId } = match.params;
  const dispatch = useDispatch();
  const palette = useSelector((state) => getPalette(state, paletteId));
  const page = useSelector(getCreationPage);

  useEffect(() => {
    if (palette) {
      dispatch(setPalette(palette));
      dispatch(setOriginalPalette(palette));
      dispatch(setShades(palette.colors));
    }
  }, [palette, paletteId]);

  return (
    <Wrapper>
      {page === 'preview'
        ? (
          <Preview />
        ) : (
          <Shades />
        )}
    </Wrapper>
  );
};

Palette.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      paletteId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Wrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Palette;
