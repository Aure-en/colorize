import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Palettes from '../components/Palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
import Filter from '../components/Filter/Filter';
import NoPalettes from '../components/Palettes/NoPalettes';
import Loading from '../components/Shared/Loading';

import { getPalettesPage } from '../selectors/palettes';
import { savePalettes } from '../actions/palettes';

import { getColorFromHex } from '../utils/colors';

const Search = () => {
  const dispatch = useDispatch();

  const [palettes, setPalettes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const search = query.get('search');
  const page = Number(query.get('page')) || 1;

  const key = `/search/${search}`;
  const palettesPage = useSelector((state) => getPalettesPage(state, key));

  // Get palettes of the current page
  useEffect(() => {
    (async () => {
      if (!search) return;

      if (palettesPage) {
        setPalettes(palettesPage.palettes);
        setLoading(false);
      }

      // API request to make a research
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/paletteoruser/${search}`,
      );

      const json = await response.json();

      if (response.status === 200) {
        const palettes = json.list.map((palette) => ({
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
  }, [search]);

  return (
    <Wrapper>
      <LeftNav />
      <Filter />
      <Main>
        <Header>
          <Heading>Search</Heading>
          {!loading && (
            <div>
              Search Results —
              {' '}
              <Span>{palettes.length}</Span>
              {' '}
              palettes found for
              {' '}
              <Span>{search}</Span>
            </div>
          )}
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error && <Error>{error}</Error>}
            {palettes?.length > 0 ? (
              <Content>
                <Palettes
                  palettes={palettes}
                  numberOfPages={numberOfPages}
                  currentPage={Number(page)}
                />
                <Pagination />
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

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.primaryText};
`;

export default Search;
