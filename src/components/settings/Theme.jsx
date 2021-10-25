import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  const theme = {
    text_primary: '#000',
    background: '#fff',
  };

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: <div />,
};

export default Theme;
