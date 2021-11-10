import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PalettesList from '../components/Palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
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
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sort = useSelector(getSortBy);
  const filter = useSelector(getFilterBy);

  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  const key = `/palettes/${filter}/${sort}/${page}`;
  const palettesPage = useSelector((state) => getPalettesPage(state, key));

  // Get palettes of the current page
  useEffect(() => {
    (async () => {
      if (palettesPage) {
        setPalettes(palettesPage.palettes);
        setLoading(false);
      }

      if (!palettesPage) setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/colors?page=${page}&filter=${filter}&sort=${sort}`,
      );

      const json = await response.json();

      if (response.status === 200) {
        const palettes = json.list
          .slice((page - 1) * 20, page * 20)
          .map((palette) => ({
            ...palette,
            colors: palette.colors.map((color) => getColorFromHex(color.hex)),
          }));
        setPalettes(palettes);
        setNumberOfPages(Math.ceil(json.nbr_palettes / 20));
        dispatch(savePalettes(key, palettes));
      } else {
        setError('Sorry, something went wrong.');
      }
      setLoading(false);
    })();
  }, [page, filter, sort]);

  return (
    <Wrapper>
      <LeftNav />
      <Filter />
      <Main>
        <Heading>Explore</Heading>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error && <Error>{error}</Error>}
            {palettes?.length > 0 ? (
              <Content>
                <PalettesList palettes={palettes} />
                <Pagination numberOfPages={numberOfPages} currentPage={Number(page)} />
              </Content>
            ) : (
              <NoPalettes />
            )}
          </>
        )}
      </Main>
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
  grid-template-rows: auto 1fr;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Palettes;
