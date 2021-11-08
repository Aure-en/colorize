import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Informations = ({ name, author }) => (
  <Wrapper>
    {name && `${name} — `}
    {author && author.id !== 1 && (
      <span>
        Made with &#x2764; by
        {' '}
        <StyledLink to={`/users/${author.id}`}>{author.username}</StyledLink>
      </span>
    )}
    {author && author.id === 1 && (
      <span>
        Generated from an
        {' '}
        <StyledLink as="a" href="https://unsplash.com/">Unsplash</StyledLink>
        {' '}
        image
      </span>
    )}
  </Wrapper>
);

Informations.propTypes = {
  name: PropTypes.string,
  author: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
};

Informations.defaultProps = {
  name: null,
  author: null,
};

const Wrapper = styled.div`
  grid-row: 4;
  grid-column: 1;

  @media all and (min-width: 900px) {
    grid-row: 3;
    grid-column: 2;
  }
`;

const link = `
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    width: 0%;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  ${link}
  color: ${(props) => props.theme.primaryText};

  &:after {
    background: ${(props) => props.theme.primaryText};
  }
`;

export default Informations;
