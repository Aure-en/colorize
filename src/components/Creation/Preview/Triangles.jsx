import React from "react";
import styled from "styled-components";
import Shape from "../../../assets/preview/Triangles";

const Triangle = () => (
  <Wrapper>
    <Text>
      <Header>
        <Logo>Colorize</Logo>
        <Right>
          <div>Your Present</div>
          <div>Our Project</div>
        </Right>
      </Header>

      <Main>
        <Heading>
          Welcome to Colorize<Accent>.</Accent>
        </Heading>
        <Subheading>Free up your creation process</Subheading>
        <p>
          Regain inspiration for your next project by creating the perfect
          palette or getting inspired by thousands of beautiful color schemes.
          Don't worry, we'll make it all fit <Accent>together.</Accent>
        </p>
      </Main>

      <Button>Find inspiration &#8594;</Button>
    </Text>
    <Shape />
  </Wrapper>
);

export default Triangle;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  overflow: hidden;
  padding: 1rem;

  @media all and (min-width: 800px) {
    grid-column-gap: 3rem;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Main = styled.div`
  margin: 1rem 0;
  align-self: center;

  & > p {
    line-height: 2rem;

    @media all and (min-width: 900px) {
      max-width: 60%;
    }
  }
`;

const Logo = styled.div`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.25rem;

  &:before {
    content: "▲";
    color: ${(props) => props.theme.tertiary};
  }
`;

const Right = styled.div`
  display: flex;
  opacity: 0.5;
  transition: background 0.2s linear;

  & > div:first-child {
    margin-right: 2rem;
  }

  & > div {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.tertiary};
    }
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondary};

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 2rem;
    background: ${(props) => props.theme.tertiary};
    margin: 2rem 0;
  }
`;

const Accent = styled.span`
  color: ${(props) => props.theme.secondary};
`;

const Button = styled.div`
  display: inline-block;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textOnPrimary};
  border-radius: 3px;
  cursor: pointer;
  margin: 1rem 0;
  justify-self: start;
  transition: background 0.2s linear;

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.textOnSecondary}
  }

  @media all and (min-width: 1000px) {
    margin: 2rem 0;
  }
`;
