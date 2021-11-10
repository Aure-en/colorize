import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCollections } from '../../../selectors/favorite';
import Collection from './Preview/Collection';
import CreateButton from './CreateButton';

const List = () => {
  const collections = useSelector(getCollections);

  return (
    <Wrapper>
      {collections.map((collection) => <Collection collection={collection} key={collection.id} />)}
      <CreateButton />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  align-items: start;
  justify-content: center;
  grid-gap: 4rem;
`;

export default List;
