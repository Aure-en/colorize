import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../selectors/user';
import { getUsersPage } from '../selectors/users';
import { saveUser } from '../actions/users';

import Username from '../components/Profile/Username';
import PageChange from '../components/Profile/PageChange';
import Creations from '../components/Profile/Creations';
import Likes from '../components/Profile/Likes';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const userId = Number(match.params.userId);
  const currentUser = useSelector(getUser);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState('creations');

  const key = `/users/${userId}`;
  const userProfile = useSelector((state) => getUsersPage(state, key));

  // Fetch user and palettes
  useEffect(() => {
    (async () => {
      if (userProfile) {
        setUser(userProfile.user);
        setLoading(false);
      }

      if (!userProfile) setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${userId}/palettes/created`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.jwt}`,
          },
        },
      );

      if (response.status === 200) {
        const json = await response.json();

        const user = {
          username: json.list.username,
          id: json.list.id,
        };

        setUser(user);

        dispatch(saveUser(key, user));
        setLoading(false);
      } else if (response.status === 422) {
        setError('This user does not exist.');
        setLoading(false);
      } else {
        setError('Sorry, something went wrong.');
        setLoading(false);
      }
    })();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Wrapper>
      {user && (
        <Header>
          <Username username={user.username} />
          {currentUser.id === user.id && (
            <PageChange
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Header>
      )}
      <Palettes>
        {currentPage === 'creations' && <Creations userId={userId} />}
        {currentPage === 'likes' && <Likes userId={userId} />}
      </Palettes>
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
  padding: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Palettes = styled.main`
  flex: 1;
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

export default Profile;
