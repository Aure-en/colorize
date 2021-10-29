import React from 'react';
import styled from 'styled-components';
import Add from './Add';
import CollectionsList from './CollectionsList';
import SearchBar from './SearchBar';
import useWindowSize from '../../../hooks/shared/useWindowSize';

const Nav = () => {
  const windowSize = useWindowSize();

  return (
    <Wrapper>
      <SearchBar />
      {windowSize.width > 768 && (
        <>
          <Add />
          <CollectionsList />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

export default Nav;
