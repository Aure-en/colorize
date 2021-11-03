import React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <PaginationDropdown>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </PaginationDropdown>
  );
}

const PaginationDropdown = styled.div`
display: flex;
justify-content: center;
margin-bottom: 1em;
`;
