import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUser } from '../selectors/user';

import ProfilePage from '../components/Profile/ProfilePage';
import PalettesList from '../components/Palettes/CardsList';
import Pagination from '../components/Shared/Pagination';

const Profile = ({ match }) => {
  const currentUser = useSelector(getUser);
  const { userId } = match.params;

  const [user, setUser] = useState();
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);

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
      }
    })();
  }, []);

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
          setPalettes(json.palettesCreated);
        }

        setLoading(false);
      }
    })();
  }, [user]);

  return (
    <Wrapper>
      {user && <ProfilePage username={user.username} />}
      <PalettesWrapper>
        <PalettesList palettes={palettes} />
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

export default Profile;
