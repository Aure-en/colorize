import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Number = ({ number }) => (
  <Wrapper>
    {number}
    {' '}
    palette
    {number > 1 && 's'}
  </Wrapper>
);

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.text_secondary}
`;

export default Number;
