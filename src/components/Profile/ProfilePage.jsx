import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Username from './Username';
import Filter from './FilterProfile';

const ProfilePage = ({ username }) => (
  <ProfileContainer>
    <TopContainer>
      <Username username={username} />
      {/* <FilterSpaceContainer>
        <Filter />
      </FilterSpaceContainer> */}
    </TopContainer>
    <CreationTitle>Creations</CreationTitle>
  </ProfileContainer>
);

ProfilePage.propTypes = {
  username: PropTypes.string.isRequired,
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CreationTitle = styled.h1`
  font-size: 2em;
  text-weight: bolder;
  margin-top: 2em;
  margin-left: 0.5em;
  margin-bottom: 0.8em;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 0;
    justify-content: center;
  }
`;

const FilterSpaceContainer = styled.div`
  display: flex;
`;

export default ProfilePage;
