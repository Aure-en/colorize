import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormat } from '../../../actions/settings';
import { getFormat } from '../../../selectors/settings';

const Format = () => {
  const dispatch = useDispatch();
  const currentFormat = useSelector(getFormat);
  const formats = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];

  return (
    <Wrapper>
      {formats.map((format) => (
        <Button
          type="button"
          key={format}
          $selected={format === currentFormat}
          onClick={() => dispatch(updateFormat(format))}
        >
          {format}
        </Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Button = styled.button`
  font-size: 0.925rem;
  text-transform: uppercase;
  color: ${(props) => (props.$selected ? props.theme.primaryText : props.theme.textPrimary)};
  font-weight: ${(props) => (props.$selected ? '500' : '400')};
  transition: color 0.2s linear;

  &:hover {
    color: ${(props) => (!props.$selected ? props.theme.secondaryText : props.theme.primaryText)};
  }
`;

export default Format;
