import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Buttons = ({ select, total, current }) => (
  <Wrapper>
    {Array.from(Array(total).keys()).map((number) => (
      <Button
        type="button"
        onClick={() => select(number + 1)}
        $current={current === number + 1}
        key={number}
      >
        {number + 1}
      </Button>
    ))}
  </Wrapper>
);

Buttons.propTypes = {
  select: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;

  @media all and (min-width: 900px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  transition: color 0.2s linear, transform 0.2s linear;
  opacity: ${(props) => (props.$current ? 1 : 0.5)};
  transform: ${(props) => props.$current && 'scale(1.2)'};

  &:hover {
    color: ${(props) => props.theme.tertiary};
    transform: scale(1.2);
    opacity: 1;
  }
`;

export default Buttons;
