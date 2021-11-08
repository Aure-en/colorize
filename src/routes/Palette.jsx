import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { getCreationPage } from '../selectors/settings';
import { getPalettePage } from '../selectors/palettes';
import { getPaletteLoading } from '../selectors/palette';
import {
  setOriginalPalette,
  setMainPalette,
  setShades,
} from '../actions/palette';
import { savePalette } from '../actions/palettes';

import Shades from '../components/Creation/Shades/Shades';
import Preview from '../components/Creation/Preview/Preview';
import Loading from '../components/Shared/Loading';

import { getColorFromHex } from '../utils/colors';

const Palette = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const paletteId = Number(match.params.paletteId);

  const [loading, setLoading] = useState(true);

  const page = useSelector(getCreationPage);

  const key = `/palettes/${paletteId}`;
  const palettePage = useSelector((state) => getPalettePage(state, key));

  const paletteLoading = useSelector(getPaletteLoading);
  const wasPaletteDeleted = paletteLoading.action === 'delete'
    && paletteLoading.status === 'fulfilled'
    && paletteLoading.id === paletteId;

  useEffect(() => {
    (async () => {
      if (palettePage) {
        dispatch(setMainPalette(palettePage.palette));
        dispatch(setOriginalPalette(palettePage.palette));
        dispatch(setShades(palettePage.palette));
        setLoading(false);
      }

      // Fetch palette
      const paletteResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${paletteId}/colors`,
      );

      // Fetch owner
      const ownerResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${paletteId}/user`,
      );

      if (paletteResponse.status === 200 && ownerResponse.status === 200) {
        const paletteJson = await paletteResponse.json();
        const ownerJson = await ownerResponse.json();
        const palette = {
          ...paletteJson,
          ...ownerJson,
          colors: paletteJson.colors.map((color) => getColorFromHex(color.hex)),
        };
        dispatch(savePalette(key, palette));
        dispatch(setMainPalette(palette));
        dispatch(setOriginalPalette(palette));
        dispatch(setShades(palette));
        setLoading(false);
      }
    })();
  }, [palettePage, paletteId]);

  // If the user deleted this palette, redirects them to '/'.
  useEffect(() => {
    if (wasPaletteDeleted) {
      history.push('/');
    }
  }, [paletteLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {page === 'preview' ? <Preview /> : <Shades />}
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
