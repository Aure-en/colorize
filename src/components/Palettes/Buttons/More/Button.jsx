import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as IconDots } from '../../../../assets/Icons/card/dots.svg';

const Button = ({ toggleMenu }) => (
  <ButtonDots type="button" onClick={toggleMenu}>
    <IconDots />
  </ButtonDots>
);

const ButtonDots = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.textPrimary};

  & > svg {
    position: relative;
    bottom: 2px;
  }
`;

Button.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Button;
