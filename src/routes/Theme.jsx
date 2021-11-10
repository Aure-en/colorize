import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Palettes from '../components/Palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
import Filter from '../components/Filter/Filter';
import Loading from '../components/Shared/Loading';
import NotFound from '../components/Error/NotFound';
import NoPalettes from '../components/Palettes/NoPalettes';

import { saveThemePalettes } from '../actions/themes';
import { getSortBy, getFilterBy } from '../selectors/settings';
import { getThemes, getThemePage } from '../selectors/themes';

import { getColorFromHex } from '../utils/colors';

const Theme = ({ match }) => {
  const dispatch = useDispatch();

  const themeId = Number(match.params.themeId);

  const themes = useSelector(getThemes);
  const sort = useSelector(getSortBy);
  const filter = useSelector(getFilterBy);
  const theme = themes.find((theme) => theme.id === themeId);

  const [palettes, setPalettes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;

  const key = `/themes/${themeId}/${filter}/${sort}/${page}`;
  const themePage = useSelector((state) => getThemePage(state, key));

  // Get theme palettes of the current page
  useEffect(() => {
    (async () => {
      if (themePage) {
        setPalettes(themePage.palettes);
        setLoading(false);
      }

      if (theme) {
        if (!themePage) setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/themes/${themeId}/palettes?page=${page}&filter=${filter}&sort=${sort}`,
        );

        if (response.status === 200) {
          const json = await response.json();
          const palettes = json.list.palettes
            .slice((page - 1) * 20, page * 20)
            .map((palette) => ({
              ...palette,
              colors: palette.colors.map((color) => getColorFromHex(color.hex)),
            }));
          setPalettes(palettes);
          dispatch(saveThemePalettes(key, palettes));
          setNumberOfPages(Math.ceil(json.nbr_palettes / 20));
        } else {
          setError('Sorry, something went wrong.');
        }
        setLoading(false);
      }
    })();
  }, [theme, page, filter, sort]);

  if (!theme) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <LeftNav />
      <Filter />
      <Main>
        <Heading>{theme?.name}</Heading>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error && <Error>{error}</Error>}
            {palettes?.length > 0 ? (
              <Content>
                <Palettes palettes={palettes} />
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

Theme.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      themeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
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

export default Theme;
