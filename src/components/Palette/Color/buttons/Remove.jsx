import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getMainPalette } from '../../../../selectors/palette';
import { removeColor, setShades } from '../../../../actions/palette';

import { toastify } from '../../../Shared/Toast';

import { ReactComponent as IconRemove } from '../../../../assets/icons/color/remove.svg';

const Remove = ({ position }) => {
  const dispatch = useDispatch();
  const mainPalette = useSelector(getMainPalette);

  const handleClick = () => {
    if (mainPalette.colors.length > 1) {
      dispatch(removeColor(position));
      dispatch(setShades());
    } else {
      toastify('Your palette must at least have 1 color.');
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      <IconRemove />
    </Button>
  );
};

Remove.propTypes = {
  position: PropTypes.number.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.textSecondary};

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;

export default Remove;
