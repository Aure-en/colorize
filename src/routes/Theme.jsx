import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Palettes from '../components/Palettes/CardsList';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/Shared/Pagination';
import Carousel from '../components/Carousel/Carousel';
import Filter from '../components/Filter/Filter';
import NoPalettes from '../components/Palettes/NoPalettes';

import Loading from '../components/Shared/Loading';

const Theme = ({ match }) => {
  const { themeId } = match.params;

  const [theme, setTheme] = useState();
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;

  // Fetch theme
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/themes/${themeId}`,
      );

      if (response.status === 200) {
        const json = await response.json();
        setTheme(json);
      } else if (response.status === 422) {
        setError('This theme does not exist.');
        setLoading(false);
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [themeId]);

  // Fetch theme palettes of the current page
  useEffect(() => {
    (async () => {
      if (theme?.id) {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/themes/${themeId}/palettes?page=${page}`,
        );

        const json = await response.json();

        if (response.status === 200) {
          setPalettes(json.palettes);
        } else {
          setError('Sorry, something went wrong.');
        }
        setLoading(false);
      }
    })();
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        <LeftNav />
        <Filter />
        <Carousel />
        <Main>
          <Heading>{theme?.name}</Heading>
          {error && <Error>{error}</Error>}
          {palettes?.length > 0
            ? <Palettes palettes={palettes} />
            : <NoPalettes />}
        </Main>
      </Wrapper>
      <Pagination />
    </>
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

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Theme;
