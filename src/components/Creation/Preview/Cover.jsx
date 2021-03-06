import React from 'react';
import styled from 'styled-components';
import Shape from '../../../assets/preview/Cover';

const Cover = () => (
  <Wrapper>
    <Shape />
    <Text>
      <Heading>
        <span>The Cover</span>
        {' '}
        Geometric
      </Heading>
      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi
        quisquam.
        <span>
          {' '}
          Delectus unde accusamus, ut asperiores modi cumque enim
          aspernatur quasi. Dolor aliquid.
        </span>
      </Details>
      <Number>#01</Number>
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.div`
  padding: 3rem;
  text-align: center;

  @media all and (min-width: 800px) {
    max-width: 50%;
  }
`;

const Heading = styled.h2`
  position: relative;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: ${(props) => props.theme.tertiary};
  letter-spacing: 3px;

  & > span {
    font-weight: bold;
    color: ${(props) => props.theme.text_dark};
  }

  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 0;
    top: 50%;
    z-index: -1;
    height: 80%;
    background: ${(props) => props.theme.quinary};
    opacity: 0.15;
  }
`;

const Details = styled.div`
  margin: 2rem;
  display: none;

  @media all and (min-width: 600px) {
    display: block;
  }

  & > span {
    display: none;

    @media all and (min-width: 1300px) {
      display: block;
    }
  }
`;

const Number = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;

  &:hover {
    color: ${(props) => props.theme.quinary};
  }
`;

export default Cover;
