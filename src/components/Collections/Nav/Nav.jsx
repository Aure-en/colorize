import React from 'react';
import styled from 'styled-components';

import CreateButton from './CreateButton';
import CollectionsList from './CollectionsList';
import SearchBar from '../../Shared/SearchBar';
import useWindowSize from '../../../hooks/shared/useWindowSize';

const Nav = () => {
  const windowSize = useWindowSize();

  return (
    <Wrapper>
      <SearchBar />
      {windowSize.width > 768 && (
        <>
          <CreateButton />
          <CollectionsList />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media all and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export default Nav;
