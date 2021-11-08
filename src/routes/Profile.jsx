import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../selectors/user';
import { getUserProfile } from '../selectors/users';
import { saveUser } from '../actions/users';

import ProfilePage from '../components/Profile/ProfilePage';
import PalettesList from '../components/Palettes/CardsList';
import Pagination from '../components/Shared/Pagination';
import NoPalettes from '../components/Profile/NoPalettes';
import Loading from '../components/Shared/Loading';

import { getColorFromHex } from '../utils/colors';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const { userId } = match.params;

  const [user, setUser] = useState();
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;

  const key = `/users/${userId}`;
  const currentUser = useSelector(getUser);
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

      const userResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      if (userResponse.status === 200) {
        const user = await userResponse.json();
        setUser(user);

        const userPalettesResponse = await fetch(
          `
          ${process.env.REACT_APP_SERVER}/user/${user.id}/palettes/created?page=${page}
        `,
          {
            headers: {
              Authorization: `Bearer ${currentUser.jwt}`,
            },
          },
        );

        const userPalettes = await userPalettesResponse.json();

        if (userPalettesResponse.status === 200) {
          const palettes = userPalettes.palettesCreated.map((palette) => ({
            ...palette,
            colors: palette.colors.map((color) => getColorFromHex(color.hex)),
          }));
          setPalettes(palettes.slice((page - 1) * 20, page * 20));
          dispatch(saveUser(key, user, palettes.slice((page - 1) * 20, page * 20)));
        } else {
          setError('Sorry, something went wrong.');
        }
        setLoading(false);
      } else if (userResponse.status === 422) {
        setError('This user does not exist.');
        setLoading(false);
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Wrapper>
      {user && <ProfilePage username={user.username} />}
      <PalettesWrapper>
        {palettes.length > 0
          ? <PalettesList palettes={palettes} />
          : <NoPalettes />}
      </PalettesWrapper>
      <Pagination />
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

const PalettesWrapper = styled.div`
  padding-bottom: 2em;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Profile;
