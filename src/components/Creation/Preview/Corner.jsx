import React from 'react';
import styled from 'styled-components';
import Shape from '../../../assets/preview/Corner';

const Corner = () => (
  <Wrapper>
    <Shape />
    <Right>
      <Heading>
        Find your
        {' '}
        <span>inspiration</span>
      </Heading>
      <Subheading>
        We&apos;ve made the process of finding your dream house a piece of cake!
        Here&apos;s how it works.
      </Subheading>

      <Ul>
        <li>
          <Content>
            <strong>Explore generated palettes</strong>
            <div>We extract palettes from beautiful pictures to show you the best color schemes.</div>
          </Content>
        </li>

        <li>
          <Content>
            <strong>Create your own palette</strong>
            <div>Already have a brilliant idea? Give birth to it in our editor.</div>
          </Content>
        </li>

        <li>
          <Content>
            <strong>Save it.</strong>
            <div>Create an account and save as many palettes as you would like.</div>
          </Content>
        </li>
      </Ul>
    </Right>
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  flex: 1;
  align-items: center;
  overflow: hidden;
  grid-template-columns: 1fr 4fr;

  @media all and (min-width: 800px) {
    grid-template-columns: 1fr 2fr;
  }

  @media all and (min-width: 1300px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const Right = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2rem;
  border-radius: 5px;

  @media all and (min-width: 1300px) {
    max-width: 70%;
  }
`;

const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  margin-bottom: 2rem;
  font-size: 2rem;

  & > span {
    position: relative;
  }

  & > span:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 15%;
    top: 50%;
    height: 50%;
    background: ${(props) => props.theme.quinary};
    opacity: 0.15;
  }

  @media all and (min-width: 1120px) {
    font-size: 3rem;
  }
`;

const Subheading = styled.div`
  letter-spacing: 3px;
  font-size: 1rem;
  font-weight: 300;
  color: ${(props) => props.theme.tertiary};

  @media all and (min-width: 1120px) {
    font-size: 1.25rem;
  }
`;

const Ul = styled.ul`
  margin: 2rem 0;

  & > li {
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 1.5rem;
    margin-bottom: 1.5rem;
    
    &:before {
      content: "";
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 0 50% 0 50%;
    }
  }

  & li:first-child:before {
    background: ${(props) => props.theme.primary};
  }

  & li:nth-child(2):before {
    background: ${(props) => props.theme.secondary};
  }

  & li:nth-child(3):before {
    background: ${(props) => props.theme.tertiary};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Corner;
