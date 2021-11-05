import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function BasicPagination() {
  return (
    <Pagination>
      <Container>
        <Link to="/palettes?page=1" exact className="navlink">1</Link>
        <Link to="/palettes?page=2" exact className="navlink">2</Link>
        <Link to="/palettes?page=3" exact className="navlink">3</Link>
        <Link to="/palettes?page=4" exact className="navlink">4</Link>
        <Link to="/palettes?page=5" exact className="navlink">5</Link>
        <Link to="/palettes?page=6" exact className="navlink">6</Link>
        <Link to="/palettes?page=7" exact className="navlink">7</Link>
        <Link to="/palettes?page=8" exact className="navlink">8</Link>
        <Link to="/palettes?page=9" exact className="navlink">9</Link>
        <Link to="/palettes?page=10" exact className="navlink">10</Link>
        <Link to="/palettes?page=11" exact className="navlink">11</Link>
        <Link to="/palettes?page=12" exact className="navlink">12</Link>
        <Link to="/palettes?page=13" exact className="navlink">13</Link>
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