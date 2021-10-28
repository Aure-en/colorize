import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getPalette } from '../../selectors/palette';

const Theme = ({ children }) => {
  const TEXT_INITIAL = '#000';
  const BACKGROUND_INITIAL = '#FFF';

  const initial = {
    text_primary: TEXT_INITIAL,
    background: BACKGROUND_INITIAL,
    background_color_Nav: '#0D2538',
  };

  const [theme, setTheme] = useState(initial);
  const palette = useSelector(getPalette);

  useEffect(() => {
    const newTheme = { ...theme };
    const themeKeys = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

    // Set the main palette in the theme
    themeKeys.forEach((key, index) => {
      if (palette.colors[index]) {
        newTheme[key] = palette.colors[index].hex;
      } else {
        newTheme[key] = TEXT_INITIAL;
      }
    });

    setTheme(newTheme);
  }, [palette]);

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