import React from 'react';
import { useSelector } from 'react-redux';
import Shades from '../components/creation/shades/Shades';
import Preview from '../components/creation/preview/Preview';
import { getCreationPage } from '../reducers/settings';

const Creation = () => {
  const page = useSelector(getCreationPage);

  return (
    <>
      {page === 'preview'
        ? (
          <Preview />
        ) : (
          <Shades />
        )}
    </>
  );
};

export default Creation;
