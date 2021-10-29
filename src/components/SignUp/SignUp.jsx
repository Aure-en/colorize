import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const SignUp = () => (
  <Wrapper>
    <WrapperTwo>
      <LogoBrand>
        <Logo classname="logo" />
        <Brand>Colorize</Brand>
      </LogoBrand>
      <UserRegistration>User Registration</UserRegistration>
      <Sign>
        <In>Sign In</In>
        <Up>Sign Up</Up>
      </Sign>
    </WrapperTwo>
    <WrapperOne>
      <Title>Sign Up</Title>
      <Username placeholder="Username" />
      <Email placeholder="Email" />
      <Password placeholder="Password" />
      <Repeat placeholder="Repeat" />
      <WrapLeft>
        <Button onClick="submit">Submit</Button>
      </WrapLeft>
    </WrapperOne>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  height : 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.backgroundColorNav};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }

`;

const WrapperOne = styled.div`
  background: ${(props) => props.theme.backgroundColorNav};
  width: 60%;
  padding: 5px;
  padding-left: 2rem;
  height: 100%;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.backgroundColorNav};
    margin: 2rem;
    padding: 1rem;
    width: 100%;
  }
`;

const WrapperTwo = styled.div`
  background: ${(props) => props.theme.backgroundColorNav};
  width: 40%;
  padding: 5px;
  padding-left: 0.5rem;
  height: 100%;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
  
`;

const Title = styled.h1`
  color: ${(props) => props.theme.background};
  font-size: 2rem;
  height: 20%; 
  width: 85%;
  margin: 1rem;
  padding-top: 2rem;
  margin-top: 4rem;

    @media (max-width: 768px) {
    background-color: ${(props) => props.theme.background};
    height: 6rem;
    padding: 1rem;
    padding-top: 2rem;
    color: black;
    }

`;

const Username = styled.input`
background: ${(props) => props.theme.background};
height: 8%;
width: 85%;
padding: 1rem;
margin: 2% 1rem;

@media (max-width: 768px) {
  background-color: ${(props) => props.theme.background};
  height: 4rem;
  padding: 1rem;
  margin-top: 2rem;
  }

`;

const Email = styled.input`
background: ${(props) => props.theme.background};
height: 8%;
width: 85%;
padding: 1rem;
margin: 2% 1rem;

@media (max-width: 768px) {
  background-color: ${(props) => props.theme.background};
  height: 4rem;
  padding: 1rem;
  margin-top: 1rem;
  }
`;

const Password = styled.input`
background: ${(props) => props.theme.background};
height: 8%;
width: 41%;
padding: 1rem;
margin: 2% 1rem;

@media (max-width: 768px) {
  background-color: ${(props) => props.theme.background};
  height: 4rem;
  padding: 1rem;
  margin-top: 1rem;
  }

`;

const Repeat = styled.input`
background: ${(props) => props.theme.background};
height: 8%;
width: 41%;
padding: 1rem;
margin: 1% 0;

@media (max-width: 768px) {
  background-color: ${(props) => props.theme.background};
  height: 4rem;
  padding: 1rem;
  margin-top: 1rem:
  }

`;

const WrapLeft = styled.div`
display: flex;
flex-direction: row;
width: 80%;
margin: 1rem;

`;

const Button = styled.button`
  background : green;
  display:block;
  width:30%;
  line-height:50px;
  text-align:center;
  vertical-align:middle;
  color:white;
  text-decoration:none;

`;

const LogoBrand = styled.div`
font-size: 2rem;
height: 20%; 
margin: 1rem;
margin-top: 4.5rem;  
padding: 1rem;
display: flex;
flex-direction: row

`;

const Brand = styled.div`
color: ${(props) => props.theme.background};
width: 55%;
margin-left: 1rem;
`;

const UserRegistration = styled.div`
color: ${(props) => props.theme.background};
margin: 1rem 2rem 1rem;
padding: 1rem;
`;

const Sign = styled.div`
color: ${(props) => props.theme.background};
margin: 1rem 2rem 1rem;
padding: 0 1rem;
width: 60%;

display: flex;
flex-direction: row;
`;

const In = styled.div`
width: 100%;
`;

const Up = styled.div`
width: 100%;
`;

export default SignUp;
