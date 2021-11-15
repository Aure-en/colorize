import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addColor, setShades } from '../../../actions/palette';

import IconAdd from '../../../assets/icons/palette/IconAdd';

const AddColor = ({ isSmall }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addColor());
    dispatch(setShades());
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      title="Add a color"
      $isDark={isSmall}
    >
      <IconAdd size={isSmall ? 36 : 74} />
    </Button>
  );
};

AddColor.propTypes = {
  isSmall: PropTypes.bool,
};

AddColor.defaultProps = {
  isSmall: false,
};

const Button = styled.button`
  color: ${(props) => (props.$isDark ? props.theme.textPrimary : props.theme.textSecondary)};
  transition: color 0.2s linear;

  &:hover {
    color: ${(props) => (props.$isDark ? props.theme.primaryText : props.theme.textPrimary)};
  }
`;

export default AddColor;
