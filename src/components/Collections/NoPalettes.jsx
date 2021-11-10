import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoPalettes = () => (
  <Wrapper>
    <Content>
      <Heading>There is nothing there.</Heading>
      <Text>
        <p>It seems that you haven&apos;t saved any palettes in this collection yet.</p>
        <p>How about searching for inspiration?</p>
      </Text>
      {/* &#8592; = ← */}
      <HomeLink to="/">Explore Palettes</HomeLink>
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
