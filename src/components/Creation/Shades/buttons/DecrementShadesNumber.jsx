import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { decrementShades } from '../../../../actions/palette';
import { ReactComponent as IconMinus } from '../../../../assets/icons/shades/minus.svg';

const DecrementShadesNumber = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(decrementShades())}>
      <IconMinus />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0.5rem;
  transition: color 0.2s ease-out;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};


  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default DecrementShadesNumber;
