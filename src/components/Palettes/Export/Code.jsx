import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Code = ({ code, codeFormat, colorFormat }) => (
  <Wrapper>
    <Comment>
      /*
      {' '}
      {codeFormat}
      {' '}
      {colorFormat}
      {' '}
      */
    </Comment>
    {code}
  </Wrapper>
);

Code.propTypes = {
  code: PropTypes.string.isRequired,
  codeFormat: PropTypes.string.isRequired,
  colorFormat: PropTypes.string.isRequired,
};

const Wrapper = styled.code`
  display: block;
  white-space: pre;
  background: ${(props) => props.theme.primary};
  padding: 1rem;

  overflow-y: auto;
  border-radius: 0.25rem;
  font-size: 0.925rem;
`;

const Comment = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.textSecondary};
`;

export default Code;
