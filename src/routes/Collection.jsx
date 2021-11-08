import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getCollection } from '../selectors/favorite';

import Nav from '../components/Collections/Nav/Nav';
import CardsList from '../components/Palettes/CardsList';
import Menu from '../components/Collections/Menu/Menu';

const Collection = ({ match }) => {
  const { collectionId } = match.params;
  const collection = useSelector((state) => getCollection(state, collectionId));

  return (
    <Wrapper>
      <Nav />
      {collection && (
        <Main>
          <Header>
            <Heading>{collection.name}</Heading>
            <Menu collection={collection} />
          </Header>
          <CardsList palettes={collection.palettes} />
        </Main>
      )}
    </Wrapper>
  );
};

Collection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      collectionId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: start;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-gap: 3rem;
    padding: 3rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;

  @media all and (min-width: 768px) {
    align-self: start;
  }
`;

export default Collection;
