import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Shades from '../components/creation/shades/Shades';
import Preview from '../components/creation/preview/Preview';
import { getCreationPage } from '../reducers/settings';

const Creation = () => {
  const page = useSelector(getCreationPage);

  return (
    <Wrapper>
      {page === 'preview'
        ? (
          <Preview />
        ) : (
          <Shades />
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
     }
`;

export default Creation;
