import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoPalettes = () => (
  <Wrapper>
    <Content>
      <Heading>There is nothing there.</Heading>
      <Text>
        <p>Sorry, we were unable to find any palettes meeting your criteria.</p>
        <CreationLink to="/creation">How about creating yours?</CreationLink>
      </Text>
      {/* &#8592; = ← */}
      <HomeLink to="/">&#8592; Take a step back</HomeLink>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  text-align: center;
  padding: 2rem 5rem;
`;

const Heading = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme.primaryText};
`;

const CreationLink = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.primaryText};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    background: ${(props) => props.theme.primaryText};
    width: 0%;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const HomeLink = styled(Link)`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  justify-self: end;
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

const Text = styled.div`
  margin-top: 1rem;

  & > p {
    margin-bottom: 1rem;
  }
`;

export default NoPalettes;
