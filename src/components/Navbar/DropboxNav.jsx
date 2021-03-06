import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';

import useDropdown from '../../hooks/shared/useDropdown';

import { getFormat } from '../../selectors/settings';
import { updateFormat } from '../../actions/settings';

const DropboxNav = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const formats = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];
  const currentFormat = useSelector(getFormat);
  const formatWithoutCurrent = (() => formats.filter((format) => format !== currentFormat))();

  return (
    <Dropdown ref={ref}>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentFormat}
        {/* &#9660; */}
        {/* Caret down */}
      </DropdownHeader>

      <Transition
        in={isDropdownOpen}
        timeout={{
          enter: 0,
          exit: 500,
        }}
        mountOnEnter={false}
        unmountOnExit
      >
        {(state) => (
          <DropdownList $entered={state === 'entered'}>
            {formatWithoutCurrent.map((format) => (
              <Button
                type="button"
                onClick={() => { dispatch(updateFormat(format)); }}
                key={format}
              >
                {format}
              </Button>
            ))}
          </DropdownList>
        )}
      </Transition>
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
  padding: 0.8rem 0.5rem 0.8rem 1rem;
  font-weight: 600;
  text-align: center;
  justify-self: end;
  right: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DropdownHeader = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.theme.textOnPrimary};

  & > svg {
    margin-left: 0.25rem;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 110%;
  padding: ${(props) => (props.$entered ? '0.25rem 0' : 0)};
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => (props.$entered ? props.theme.textPrimary : 'transparent')};
  max-height: ${(props) => (props.$entered ? '10rem' : 0)};
  transition: all 0.5s ease;
  overflow: hidden;
`;

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: capitalize;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.secondaryBackground};
  }
`;

export default DropboxNav;
