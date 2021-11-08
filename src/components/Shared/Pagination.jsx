import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

export default function BasicPagination() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Pagination>
      <Container>
        <Link to={`${pathname}?page=1`} exact className="navlink">1</Link>
        <Link to={`${pathname}?page=2`} exact className="navlink">2</Link>
        <Link to={`${pathname}?page=3`} exact className="navlink">3</Link>
        <Link to={`${pathname}?page=4`} exact className="navlink">4</Link>
        <Link to={`${pathname}?page=5`} exact className="navlink">5</Link>
        <Link to={`${pathname}?page=6`} exact className="navlink">6</Link>
        <Link to={`${pathname}?page=7`} exact className="navlink">7</Link>
        <Link to={`${pathname}?page=8`} exact className="navlink">8</Link>
        <Link to={`${pathname}?page=9`} exact className="navlink">9</Link>
        <Link to={`${pathname}?page=10`} exact className="navlink">10</Link>
        <Link to={`${pathname}?page=11`} exact className="navlink">11</Link>
        <Link to={`${pathname}?page=12`} exact className="navlink">12</Link>
        <Link to={`${pathname}?page=13`} exact className="navlink">13</Link>
      </Container>
    </Pagination>
  );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Container = styled.div`
 display: flex;
 justify-content: space-between;
 width: 20%;
 font-size: 1em;
 
 `;

const Link = styled(NavLink)`
color: ${(props) => props.theme.textPrimary};
`;
