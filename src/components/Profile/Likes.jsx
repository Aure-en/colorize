import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { savePalettes } from '../../actions/palettes';
import { getUser } from '../../selectors/user';
import { getPalettesPage } from '../../selectors/palettes';

import Palettes from '../Palettes/Palettes';
import Pagination from '../Shared/Pagination';
import NoPalettes from './NoPalettes';
import Loading from '../Shared/Loading';
import NotAllowed from '../Error/NotAllowed';

import { getColorFromHex } from '../../utils/colors';

const Likes = ({ userId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);

  const [palettes, setPalettes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  const key = `/users/${userId}/likes/${page}`;
  const palettesPage = useSelector((state) => getPalettesPage(state, key));

  // Fetch user and palettes
  useEffect(() => {
    (async () => {
      // If the current user is not the user of the profile, not allowed.
      if (currentUser.id !== userId) {
        setLoading(false);
        return;
      }

      if (palettesPage) {
        setPalettes(palettesPage.palettes);
        setLoading(false);
      }

      if (!palettesPage) setLoading(true);

      // Get palettes liked by user
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}/palettes/like?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      if (response.status === 200) {
        const json = await response.json();

        const palettes = json.list
          .map((palette) => ({
            ...palette.palette,
            colors: palette.palette.colors.map((color) => getColorFromHex(color.hex)),
          }));

        setPalettes(palettes);
        setNumberOfPages(Math.ceil(json.nbr_palettes / 20));
        setLoading(false);
        dispatch(savePalettes(key, palettes));
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [userId, page]);

  // If user is not allowed
  if (currentUser.id !== userId) {
    return (
      <NotAllowed />
    );
  }

  return (
    <>
      {loading ? (<Loader><Loading /></Loader>) : (
        <>
          {error && <Error>{error}</Error>}
          {palettes.length > 0 ? (
            <Content>
              <Palettes palettes={palettes} />
              <Pagination numberOfPages={numberOfPages} currentPage={page} />
            </Content>
          ) : (
            <NoPalettes />
          )}
        </>
      )}
    </>
  );
};

Likes.propTypes = {
  userId: PropTypes.number.isRequired,
};

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Likes;
