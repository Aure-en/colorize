/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleSwitcher } from '../../actions/settings';

const Switch = (isDarkMode) => {
  const dispatch = useDispatch();
  return (

    <Toggle checked={isDarkMode} onChange={() => dispatch(toggleSwitcher())}>
      <Checkbox type="checkbox" />
      <Label>
        <Button />
      </Label>
    </Toggle>
  );
};

const commonLabelButton = `
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

  &.active {
    width: 50%;
  }

  left: calc(100% - 2px);
  transform: translateX(-100%);
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  ${commonLabelButton};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 45px;
  height: 25px;
  background: grey;
  border-radius: 100px;
  position: relative;
`;

const Button = styled.span`
  ${commonLabelButton}
`;
  // .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
  //   left: calc(100% - 2px);
  //   transform: translateX(-100%);
  // }


export default Switch;
