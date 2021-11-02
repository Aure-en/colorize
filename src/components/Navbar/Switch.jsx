/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { toggleSwitcher } from '../../actions/settings';
import { useDispatch } from 'react-redux';

const Switch = (isDarkMode, toggleDarkMode) => {
  const dispatch = useDispatch();
  return (

    <Toggle
      checked={isDarkMode}
      onChange={() => dispatch(toggleSwitcher())}
    >
      <input
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </Toggle>
  );
};

const Toggle = styled.button`
.react-switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}

.react-switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 35px;
  height: 20px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;
}

.react-switch-label .react-switch-button {
  content: '';
  position: absolute;
  top: 2.5px;
  left: 2px;
  width: 15px;
  height: 15px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.react-switch-label:active .react-switch-button {
  width: 35px;
}

@media (max-width: 768px){
  z-index:20;
}
`;

export default Switch;
