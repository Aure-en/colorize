import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCollections } from '../../../selectors/favorite';
import Collection from './preview/Collection';

const List = () => {
  const collections = useSelector(getCollections);

  return (
    <Wrapper>
      {collections.map((collection) => <Collection collection={collection} />)}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 4rem;
  padding: 3rem;

  @media all and (min-width: 650px) {
    justify-content: space-between;
  }
`;

export default List;
