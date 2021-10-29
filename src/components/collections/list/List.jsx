import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCollections } from '../../../selectors/favorite';
import Collection from './preview/Collection';
import Add from './add/Add';

const List = () => {
  const collections = useSelector(getCollections);

  return (
    <Wrapper>
      {collections.map((collection) => <Collection collection={collection} />)}
      <Add />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  justify-content: center;
  grid-gap: 4rem;
  padding: 3rem;
`;

export default List;
