import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../selectors/user';
import { getUserProfile } from '../selectors/users';
import { saveUser } from '../actions/users';

import Username from '../components/Profile/Username';
import Palettes from '../components/Palettes/Palettes';
import Pagination from '../components/Shared/Pagination';
import NoPalettes from '../components/Profile/NoPalettes';
import PageChange from '../components/Profile/PageChange';
import Loading from '../components/Shared/Loading';
import NotAllowed from '../components/Error/NotAllowed';

import { getColorFromHex } from '../utils/colors';

const Likes = ({ match }) => {
  const dispatch = useDispatch();
  const userId = Number(match.params.userId);
  const currentUser = useSelector(getUser);

  const [user, setUser] = useState();
  const [palettes, setPalettes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  const key = `/users/${userId}/likes/${page}`;
  const userLikes = useSelector((state) => getUserProfile(state, key));

  // Fetch user and palettes
  useEffect(() => {
    (async () => {
      // If the current user is not the user of the profile, not allowed.
      if (currentUser.id !== userId) {
        setLoading(false);
        return;
      }

      if (userLikes) {
        setUser(userLikes.user);
        setPalettes(userLikes.palettes);
        setLoading(false);
      }

      if (!userLikes) setLoading(true);

      // Get user
      const userResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      const userJson = await userResponse.json();

      const user = {
        username: userJson.username,
        id: userJson.id,
      };

      setUser(user);

      // Get palettes liked
      const palettesResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}/palettes/like?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      if (userResponse.status === 200 && palettesResponse.status === 200) {
        const json = await palettesResponse.json();

        const palettes = json.list
          .map((palette) => ({
            ...palette.palette,
            colors: palette.palette.colors.map((color) => getColorFromHex(color.hex)),
          }));

        setPalettes(palettes);
        dispatch(saveUser(key, user, palettes));
        setNumberOfPages(Math.ceil(json.nbr_palettes / 20));
        setLoading(false);
      } else if (palettesResponse.status === 422) {
        setError('This user does not exist.');
        setLoading(false);
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
    <Wrapper>
      {user && (
      <Header>
        <Username username={user.username} />
        {currentUser.id === user.id && <PageChange currentPage="likes" />}
      </Header>
      )}
      <Main>
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
      </Main>
    </Wrapper>
  );
};

Likes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

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
