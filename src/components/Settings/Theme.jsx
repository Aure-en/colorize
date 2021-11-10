import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getMainPalette } from '../../selectors/palette';
import { getIsDarkMode } from '../../selectors/settings';
import {
  getBackgroundActiveShade,
  getBackgroundShade,
  getShadeOnBackground,
  isColorLight,
} from '../../utils/colors';

const Theme = ({ children }) => {
  const DARK_DEFAULT = '#292929';
  const LIGHT_DEFAULT = '#FFFFFF';

  const initial = {
    textPrimary: DARK_DEFAULT,
    textSecondary: '#9a9a9a',
    background: LIGHT_DEFAULT,
  };

  const [theme, setTheme] = useState(initial);
  const palette = useSelector(getMainPalette);
  const darkMode = useSelector(getIsDarkMode);

  useEffect(() => {
    const newTheme = { ...theme };
    const themeKeys = [
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'quinary',
    ];
    const [primary, secondary, tertiary] = palette.colors;

    // Set the main palette in the theme
    themeKeys.forEach((key, index) => {
      if (palette.colors[index]) {
        newTheme[key] = palette.colors[index].hex;
      } else {
        newTheme[key] = '#000';
      }
    });

    // Text color depending on how bright the primary color is.
    newTheme.textOnPrimary = isColorLight(primary.hex)
      ? DARK_DEFAULT
      : LIGHT_DEFAULT;

    newTheme.textOnTertiary = isColorLight(tertiary.hex)
      ? DARK_DEFAULT
      : LIGHT_DEFAULT;

    // Text colors from palette
    newTheme.primaryText = getShadeOnBackground(primary, darkMode);
    newTheme.secondaryText = getShadeOnBackground(secondary, darkMode);

    // Background colors from palette
    newTheme.primaryBackground = getBackgroundShade(primary);
    newTheme.secondaryBackground = getBackgroundShade(secondary);

    // Background active colors from palette
    newTheme.primaryBackgroundActive = getBackgroundActiveShade(primary);

    setTheme(newTheme);
  }, [darkMode, palette]);

  useEffect(() => {
    if (darkMode) {
      setTheme((prev) => ({
        ...prev,
        textPrimary: '#FFFFFF',
        textSecondary: '#9a9a9a',
        background: '#292929',
      }));
    } else {
      setTheme((prev) => ({
        ...prev,
        textPrimary: '#292929',
        textSecondary: '#9a9a9a',
        background: '#FFFFFF',
      }));
    }
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: <div />,
};

export default Theme;
