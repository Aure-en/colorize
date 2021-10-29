import React from 'react';
import styled from 'styled-components';
import ProfilePage from '../components/Profile/ProfilePage';
import Palettes from '../components/palettes/Palettes';

const Profile = () => (

  <Wrapper>
    <ProfilePage />
    <PalettesWrapper>
      <Palettes />
    </PalettesWrapper>
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
height: 100vw;
`;

export default Profile;
