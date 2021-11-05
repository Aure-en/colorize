import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Shades from '../components/Creation/Shades/Shades';
import Preview from '../components/Creation/Preview/Preview';
import { getCreationPage } from '../selectors/settings';
import { getPalette } from '../selectors/palettes';
import { setOriginalPalette, setMainPalette, setShades } from '../actions/palette';
import { fetchPalette } from '../actions/palettes';

const Palette = ({ match }) => {
  const dispatch = useDispatch();
  const page = useSelector(getCreationPage);

  // Compose key to save palette
  const { paletteId } = match.params;
  const category = 'palettes';
  const key = `/${category}/${paletteId}`;

  const paletteFromStore = useSelector((state) => getPalette(state, paletteId));

  useEffect(() => {
    if (paletteFromStore) {
      const { palette } = paletteFromStore;
      dispatch(setMainPalette(palette));
      dispatch(setOriginalPalette(palette));
      dispatch(setShades(palette.colors));
    } else {
      dispatch(fetchPalette(key, paletteId));
    }
  }, [paletteFromStore, paletteId]);

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
