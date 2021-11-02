import React from 'react';
import styled from 'styled-components';
import CurrentUsername from './CurrentUsername';
import Filter from './FilterProfile';

const ProfilePage = () => (
  <ProfileContainer>
    <TopContainer>
      <CurrentUsername />
      <FilterSpaceContainer>
        <Filter />
      </FilterSpaceContainer>
    </TopContainer>
    <CreationTitle>Creation</CreationTitle>
  </ProfileContainer>
);

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
   }
`;

const TopContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`;

const CreationTitle = styled.h1`
font-size: 2em;
text-weight: bolder;
padding-top: 2em;
padding-left: 0.5em;
padding-bottom: 0.8em;
`;

const FilterSpaceContainer = styled.div`
display: flex;
`;

export default ProfilePage;
