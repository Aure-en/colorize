import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUser } from '../selectors/user';

import ProfilePage from '../components/Profile/ProfilePage';
import PalettesList from '../components/Palettes/CardsList';
import Pagination from '../components/Shared/Pagination';
import NoPalettes from '../components/Profile/NoPalettes';
import Loading from '../components/Shared/Loading';

import { getColorFromHex } from '../utils/colors';

const Profile = ({ match }) => {
  const currentUser = useSelector(getUser);
  const { userId } = match.params;

  const [user, setUser] = useState();
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;

  // Fetch user
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      if (response.status === 200) {
        const json = await response.json();
        setUser(json);
      } else if (response.status === 422) {
        setError('This user does not exist.');
        setLoading(false);
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [userId]);

  // Fetch user palettes of the current page
  useEffect(() => {
    (async () => {
      if (user?.id) {
        const response = await fetch(
          `
          ${process.env.REACT_APP_SERVER}/user/${user.id}/palettes/created?page=${page}
        `,
          {
            headers: {
              Authorization: `Bearer ${currentUser.jwt}`,
            },
          },
        );

        const json = await response.json();

        if (response.status === 200) {
          const palettes = json.palettesCreated.map((palette) => ({
            ...palette,
            colors: palette.colors.map((color) => getColorFromHex(color.hex)),
          }));
          setPalettes(palettes.slice((page - 1) * 20, page * 20));
        } else {
          setError('Sorry, something went wrong.');
        }
        setLoading(false);
      }
    })();
  }, [user]);

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
