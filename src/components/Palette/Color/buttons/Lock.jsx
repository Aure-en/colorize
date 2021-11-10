import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { unlockColor, lockColor } from '../../../../actions/palette';
import { getIsDarkMode } from '../../../../selectors/settings';

import { getTextShade } from '../../../../utils/colors';

import IconLock from '../../../../assets/icons/color/IconLock';
import IconUnlock from '../../../../assets/icons/color/IconUnlock';

const Lock = ({ color, isLocked }) => {
  const [textColor, setTextColor] = useState('');
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);

  // Adapt the color so the text stays visible on the background.
  useEffect(() => {
    setTextColor(getTextShade(color, isDarkMode));
  }, [color, isDarkMode]);

  return (
    <Button
      type="button"
      onClick={() => {
        if (isLocked) {
          dispatch(unlockColor(color.id));
        } else {
          dispatch(lockColor(color.id));
        }
      }}
    >
      {isLocked
        ? <IconLock color={textColor} />
        : <IconUnlock color={textColor} />
      }
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  padding: 0;
`;

Lock.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default Lock;
