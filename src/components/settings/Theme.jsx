import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getPalette } from '../../reducers/paletteReducer';

const Theme = ({ children }) => {
  const TEXT_INITIAL = '#000';
  const BACKGROUND_INITIAL = '#FFF';

  const initial = {
    text_primary: TEXT_INITIAL,
    background: BACKGROUND_INITIAL,
  };

  const [theme, setTheme] = useState(initial);
  const palette = useSelector(getPalette);

  useEffect(() => {
    const newTheme = { ...theme };
    const keys = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

    keys.forEach((key, index) => {
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
