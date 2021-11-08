import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Wrapper>
    <Content>
      <Heading>404</Heading>
      <Subheading>Are you lost?</Subheading>
      <Paragraph>Sorry, we were unable to find the page you are looking for.</Paragraph>
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
  font-size: 5rem;
  font-weight: 300;
`;

const Subheading = styled.div`
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

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

const Paragraph = styled.p`
  margin: 1.5rem 0;
`;

export default NotFound;
