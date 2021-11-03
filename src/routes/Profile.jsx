import React from 'react';
import styled from 'styled-components';
import ProfilePage from '../components/Profile/ProfilePage';
import Palettes from '../components/Palettes/Palettes';
import Pagination from '../components/Shared/Pagination';

const Profile = () => (

  <Wrapper>
    <ProfilePage />
    <PalettesWrapper>
      <Palettes />
    </PalettesWrapper>
    <Pagination />
  </Wrapper>

);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
     }
`;

const PalettesWrapper = styled.div`
padding-bottom: 2em;
`;

export default Profile;
