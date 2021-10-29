import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Name = ({ name }) => (
  <Wrapper>
    {name}
  </Wrapper>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.textPrimary}
    );
    width: 0%;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default Name;
