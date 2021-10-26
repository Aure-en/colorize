import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { incrementShades } from '../../../actions/palette';
import { ReactComponent as IconPlus } from '../../../assets/icons/shades/plus.svg';

const IncrementShadesNumber = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(incrementShades())}>
      <IconPlus />
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
  margin: 0.5rem 0;
  transition: color 0.2s ease-out;
  color: ${(props) => props.theme.text_primary};
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default IncrementShadesNumber;
