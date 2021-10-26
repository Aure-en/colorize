import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateColor, unlockColor } from '../../../../actions/palette';
import { getLocked } from '../../../../reducers/palette';
import { ReactComponent as IconEdit } from '../../../../assets/icons/color/edit.svg';

const Edit = ({ color }) => {
  const dispatch = useDispatch();
  const locked = useSelector(getLocked);
  let throttle = false;

  const handleChange = useCallback(
    (e) => {
      if (!throttle) {
        dispatch(updateColor(color.id, e.target.value));
        throttle = true;
        setTimeout(() => {
          throttle = false;
        }, 300);
      }
    },
    [throttle],
  );

  const handleBlur = (e) => {
    dispatch(updateColor(color.id, e.target.value));
    if (locked[color.id]) dispatch(unlockColor(color.id));
  };

  return (
    <Label
      htmlFor={`color-${color.id}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      $index={color.id}
      $color={color}
    >
      <IconEdit />
      <input
        value={color.hex}
        onChange={handleChange}
        onBlur={handleBlur}
        type="color"
        id={`color-${color.id}`}
        name={`color-${color.id}`}
        aria-label="Edit color"
      />
    </Label>
  );
};

Edit.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Label = styled.label`
  cursor: pointer;
  & > input {
    border: none;
    width: 0;
    height: 0;
    opacity: 0;
    padding: 0;
  }
`;

export default Edit;
