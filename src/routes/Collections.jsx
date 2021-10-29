import React from 'react';
import styled from 'styled-components';
import List from '../components/collections/list/List';

const Collections = () => {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
`;

export default Collections;
