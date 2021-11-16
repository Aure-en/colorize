import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getIsDarkMode } from '../../../selectors/settings';
import { toggleSwitcher } from '../../../actions/settings';

const Theme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);

  return (
    <Wrapper>
      <Button
        type="button"
        $selected={!isDarkMode}
        onClick={() => {
          if (isDarkMode) {
            dispatch(toggleSwitcher());
          }
        }}
      >
        Light
      </Button>
      <span> — </span>
      <Button
        type="button"
        $selected={isDarkMode}
        onClick={() => {
          if (!isDarkMode) {
            dispatch(toggleSwitcher());
          }
        }}
      >
        Dark
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1.5rem 0;
`;

const Button = styled.button`
  color: ${(props) => (props.$selected ? props.theme.primaryText : props.theme.textPrimary)};
  font-weight: ${(props) => (props.$selected ? '500' : '400')};
  transform: color 0.2s linear;

  &:hover {
    color: ${(props) => (!props.$selected ? props.theme.secondaryText : props.theme.primaryText)};
  }
`;

export default Theme;
