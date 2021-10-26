import React, { useState } from 'react';
import PageChange from '../components/creation/PageChange';
import Shades from '../components/creation/shades/Shades';

const Creation = () => {
  const pages = ['preview', 'shades'];
  const [page, setPage] = useState('shades');

  return (
    <>
      <PageChange currentPage={page} pages={pages} setCurrentPage={setPage} />
      {page === 'preview'
        ? (
          <div>
            preview
          </div>
        ) : (
          <Shades />
        )}
    </>
  );
};

export default Creation;
