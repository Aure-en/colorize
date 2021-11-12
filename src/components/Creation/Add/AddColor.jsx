import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addColor } from '../../../actions/palette';

const AddColor = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(addColor())}>
      +
    </Button>
  );
};

const Button = styled.button`
  align-self: center;
  border: 1px solid red;
`;

export default AddColor;
