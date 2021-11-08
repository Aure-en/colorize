import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PalettesList from '../components/Palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
import Carousel from '../components/Carousel/Carousel';
import Filter from '../components/Filter/Filter';
import NoPalettes from '../components/Palettes/NoPalettes';
import Loading from '../components/Shared/Loading';

import { getSortBy, getFilterBy } from '../selectors/settings';
import { getPalettesPage } from '../selectors/palettes';
import { savePalettes } from '../actions/palettes';

import { getColorFromHex } from '../utils/colors';

const Palettes = () => {
  const dispatch = useDispatch();

  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sort = useSelector(getSortBy);
  const filter = useSelector(getFilterBy);

  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;

  const key = `/palettes/${filter}/${sort}/${page}`;
  const palettesPage = useSelector((state) => getPalettesPage(state, key));

  // Get palettes of the current page
  useEffect(() => {
    (async () => {
      if (palettesPage) {
        setPalettes(palettesPage.palettes);
        setLoading(false);
      }

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/themes?page=${page}&filter=${filter}&sort=${sort}`,
      );

      const json = await response.json();

      if (response.status === 200) {
        const palettes = json.map((palette) => ({
          ...palette,
          colors: palette.colors.map((color) => getColorFromHex(color.hex)),
        }));
        setPalettes(palettes.slice((page - 1) * 20, page * 20));
        dispatch(savePalettes(key, palettes.slice((page - 1) * 20, page * 20)));
      } else {
        setError('Sorry, something went wrong.');
      }
      setLoading(false);
    }
    )();
  }, [page, filter, sort]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <LeftNav />
      <Filter />
      <Carousel />
      {error && <Error>{error}</Error>}
      {palettes?.length > 0
        ? (
          <Main>
            <PalettesList palettes={palettes} />
            <Pagination />
          </Main>
        )
        : <NoPalettes />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 3rem;
    padding: 3rem;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Palettes;
