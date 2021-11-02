import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getPalette } from '../../selectors/palette';
import { getIsDarkMode } from '../../selectors/settings';
import { getLightShade, getDarkShade, isColorLight } from '../../utils/colors';

const Theme = ({ children }) => {
  const DARK_DEFAULT = '#000000';
  const LIGHT_DEFAULT = '#FFFFFF';

  const initial = {
    textPrimary: DARK_DEFAULT,
    textSecondary: '#9a9a9a',
    background: LIGHT_DEFAULT,
    backgroundColorNav: '#0D2538',
    backgroundColorSettings: '#C3CFD9',
  };

  const [theme, setTheme] = useState(initial);
  const palette = useSelector(getPalette);
  const darkMode = useSelector(getIsDarkMode);
  console.log(1);

  useEffect(() => {
    const newTheme = { ...theme };
    const themeKeys = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
    const [primary, secondary] = palette.colors;

    // Set the main palette in the theme
    themeKeys.forEach((key, index) => {
      if (palette.colors[index]) {
        newTheme[key] = palette.colors[index].hex;
      } else {
        newTheme[key] = '#000';
      }
    });

    // Text color depending on how bright the primary color is.
    newTheme.textOnPrimary = isColorLight(primary.hex) ? DARK_DEFAULT : LIGHT_DEFAULT;

    // Text colors from palette
    newTheme.primaryText = getDarkShade(primary);
    newTheme.secondaryText = getDarkShade(secondary);

    // Background colors from palette
    newTheme.primaryBackground = getLightShade(primary);
    newTheme.secondaryBackground = getLightShade(secondary);

    setTheme(newTheme);
  }, [palette]);

  useEffect(() => {
    console.log("test");
    if (darkMode) {
      setTheme({
        ...theme, textPrimary: '#fff', textSecondary: '#9a9a9a', background: '#292929'
      });
    } else {
      setTheme({
        ...theme, textPrimary: '#262626', textSecondary: '#9a9a9a',background: '#FFFFFF'
      });
    }
  }, [darkMode]);
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

export const LIGHT_MODE = {
  textPrimary: '#262626',
  textSecondary: '#9a9a9a',
  background: '#FFFFFF',
};

export const DARK_MODE = {
  textPrimary: '#fff',
  textSecondary: '#9a9a9a',
  background: '#292929',
};

export default Theme;
