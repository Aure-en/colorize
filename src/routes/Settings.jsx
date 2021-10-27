import React from 'react';
import styled from 'styled-components';
import Palettes from '../components/palettes/Palettes';
import LeftNav from '../components/LeftNavbar/LeftNav';
import Pagination from '../components/shared/Pagination';
import Carousel from '../components/Carousel/Carousel';
import Filter from '../components/Filter/Filter';

const Settings = () => (
  <>
    <Wrapper>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
     }
`;

export default Settings;
