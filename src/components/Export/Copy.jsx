import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Copy = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const copyAnimation = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClick = () => {
    copyCode();
    copyAnimation();
  };

  return (
    <Button type="button" onClick={handleClick} $copied={copied}>
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
};

Copy.propTypes = {
  code: PropTypes.string.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => (props.$copied ? props.theme.textSecondary : props.theme.textPrimary)};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: all 0.2s ease-out;
  width: 4.75rem;
  margin-top: 1rem;

  &:hover {
    background: ${(props) => (props.$copied ? props.theme.textSecondary : props.theme.primaryText)};
  }
`;

export default Copy;
