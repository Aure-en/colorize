import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCreationPage } from '../selectors/settings';
import { getPalette } from '../selectors/palettes';
import {
  setOriginalPalette,
  setMainPalette,
  setShades,
} from '../actions/palette';
import { fetchPalette } from '../actions/palettes';
import { getPaletteLoading } from '../selectors/palette';

import Shades from '../components/Creation/Shades/Shades';
import Preview from '../components/Creation/Preview/Preview';

const Palette = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const page = useSelector(getCreationPage);

  // Compose key to save palette
  const paletteId = Number(match.params.paletteId);
  const category = 'palettes';
  const key = `/${category}/${paletteId}`;

  const paletteFromStore = useSelector((state) => getPalette(state, paletteId));
  const paletteLoading = useSelector(getPaletteLoading);
  const wasPaletteDeleted = paletteLoading.action === 'delete'
    && paletteLoading.status === 'fulfilled'
    && paletteLoading.id === paletteId;

  useEffect(() => {
    if (!wasPaletteDeleted) {
      if (paletteFromStore) {
        const { palette } = paletteFromStore;
        dispatch(setMainPalette(palette));
        dispatch(setOriginalPalette(palette));
        dispatch(setShades(palette.colors));
      } else {
        dispatch(fetchPalette(key, paletteId));
      }
    }
  }, [paletteLoading, paletteFromStore, paletteId]);

  // If the user deleted this palette, redirects them to '/'.
  useEffect(() => {
    if (wasPaletteDeleted) {
      history.push('/');
    }
  }, [paletteLoading]);

  return <Wrapper>{page === 'preview' ? <Preview /> : <Shades />}</Wrapper>;
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
