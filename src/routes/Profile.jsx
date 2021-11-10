import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserProfile } from '../selectors/users';
import { saveUser } from '../actions/users';

import ProfilePage from '../components/Profile/ProfilePage';
import Palettes from '../components/Palettes/Palettes';
import Pagination from '../components/Shared/Pagination';
import NoPalettes from '../components/Profile/NoPalettes';
import Loading from '../components/Shared/Loading';

import { getColorFromHex } from '../utils/colors';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const { userId } = match.params;

  const [user, setUser] = useState();
  const [palettes, setPalettes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  const key = `/users/${userId}/${page}`;
  const userProfile = useSelector((state) => getUserProfile(state, key));

  // Fetch user and palettes
  useEffect(() => {
    (async () => {
      if (userProfile) {
        setUser(userProfile.user);
        setPalettes(userProfile.palettes);
        setLoading(false);
        return;
      }

      if (!userProfile) setLoading(true);

      const userResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}/palettes/created`,
      );

      if (userResponse.status === 200) {
        const json = await userResponse.json();

        const user = {
          username: json.list.username,
          id: json.list.id,
        };

        setUser(user);

        const palettes = json.list.palettesCreated
          .slice((page - 1) * 20, page * 20)
          .map((palette) => ({
            ...palette,
            colors: palette.colors.map((color) => getColorFromHex(color.hex)),
          }));

        setPalettes(palettes);
        dispatch(saveUser(key, user, palettes));
        setNumberOfPages(Math.ceil(json.nbr_palettes / 20));
        setLoading(false);
      } else if (userResponse.status === 422) {
        setError('This user does not exist.');
        setLoading(false);
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [userId, page]);

  return (
    <Wrapper>
      {user && <ProfilePage username={user.username} />}
      <div>
        {loading ? (<Loading />) : (
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

      </div>
    </Wrapper>
  );
};

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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

export default Profile;