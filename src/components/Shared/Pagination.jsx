import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

export default function Pagination({ numberOfPages }) {
  console.log(numberOfPages);
  // Get links path
  const location = useLocation();
  const { pathname } = location;
  const path = pathname === '/' ? '/palettes' : pathname;

  return (
    <Wrapper>
      <Container>
        {[...Array(numberOfPages).keys()].map((page) => page + 1).map((page) => (
          <Link to={`${path}?page=${page}`} exact className="navlink">{page}</Link>
        ))}
      </Container>
    </Wrapper>
  );
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
};

Pagination.defaultProps = {
  numberOfPages: 3,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  max-width: 5rem;
  font-size: 1em;
`;

const Link = styled(NavLink)`
color: ${(props) => props.theme.textPrimary};
`;
