/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getIsDarkMode } from '../../selectors/settings';
import { toggleSwitcher } from '../../actions/settings';

const Switch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);

  return (
    <Toggle
      checked={isDarkMode}
      onChange={() => {
        dispatch(toggleSwitcher());
        localStorage.setItem('isDarkMode', !isDarkMode);
      }}
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

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
    width: 45px;
    height: 25px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
  }

  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background: ${(props) => props.theme.background};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`;

export default Switch;
