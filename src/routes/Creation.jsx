import React, { useState } from 'react';
import PageChange from '../components/creation/PageChange';
import Shades from '../components/creation/shades/Shades';
import Preview from '../components/creation/preview/Preview';

const Creation = () => {
  const pages = ['preview', 'shades'];
  const [page, setPage] = useState('shades');

  return (
    <>
      <PageChange currentPage={page} pages={pages} setCurrentPage={setPage} />
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
