import React from 'react';
import styled from 'styled-components';
import ProfilePage from '../components/Profile/ProfilePage';
import Palettes from '../components/Palettes/Palettes';
import Pagination from '../components/Shared/Pagination';

const Profile = () => {

  // Get the user
  const user = { username: 'admin' };
  const userCreations = [];
  // Get their creations

  return (
    <Wrapper>
      <ProfilePage username={user.username} />
      <PalettesWrapper>
        <Palettes />
      </PalettesWrapper>
      <Pagination />
    </Wrapper>
  );
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
