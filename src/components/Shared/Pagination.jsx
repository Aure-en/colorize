import React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { withStyles } from '@mui/styles';
import { useTheme } from 'styled-components';

const theme = useTheme();
const styles = {
  root: {
    color: theme.textPrimary,
  },
};

export default function BasicPagination(props) {
  const { classes } = props; 
  return (
    <PaginationDropdown>
      <Stack spacing={2}>
          <Pagination className={classes.root} count={10} variant="outlined" color="primary" />
      </Stack>
    </PaginationDropdown>
  );
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const PaginationDropdown = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
`;

export withStyles(styles)(HigherOrderComponent);