import React, { useState, useEffect } from 'react';
import Color from 'color';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { unlockColor, lockColor } from '../../../../actions/palette';
import IconLock from '../../../../assets/icons/color/IconLock';
import IconUnlock from '../../../../assets/icons/color/IconUnlock';

const Lock = ({ color, isLocked }) => {
  const [textColor, setTextColor] = useState('');
  const dispatch = useDispatch();

  // If the color is bright, darken it to use it on the card.
  useEffect(() => {
    const newColor = Color.rgb(color.rgb);
    if (newColor.hsl().array()[2] > 70) {
      setTextColor(newColor.lightness(70).hsl().string());
    } else {
      setTextColor(newColor.hsl().string());
    }
  }, [color]);

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
