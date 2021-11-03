import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const SignIn = () => (
  <Wrapper>
    <WrapperOne>
      <Title>Sign In</Title>
      <Email placeholder="Username or Email" />
      <Password placeholder="Password" />
      <WrapLeft>
        <Button onClick="submit">Submit</Button>
        <ForgetLink to="/forgetPass">Forget Password</ForgetLink>
      </WrapLeft>
    </WrapperOne>
    <WrapperTwo>
      <LogoBrand>
        <Logo />
        <Brand>Colorize</Brand>
      </LogoBrand>
      <UserRegistration>User Registration</UserRegistration>
      <Sign>
        <In>Sign In</In>
        <Up>Sign Up</Up>
      </Sign>
    </WrapperTwo>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  height : 70%;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.background};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const WrapperOne = styled.div`
  background: ${(props) => props.theme.primaryText};
  width: 30%;
  padding: 5px;
  padding-left: 2rem;
  margin-right: 0.5rem;
  height: 100%;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.background};
    margin: 2rem;
    padding: 1rem;
    width: 100%;
  }
`;

const WrapperTwo = styled.div`
  background: ${(props) => props.theme.primaryText};
  width: 20%;
  padding: 1rem;
  padding-left: 1rem;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.background};
  font-size: 2rem;
  height: 20%; 
  width: 80%;
  margin: 1rem;
  padding-top: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
    height: 6rem;
    padding: 1rem;
    padding-top: 2rem;
  }
`;

const Email = styled.input`
  background: ${(props) => props.theme.textPrimary};
  height: 8%;
  width: 80%;
  padding: 1rem;
  margin: 2% 1rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
    height: 4rem;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

const Password = styled.input`
  background: ${(props) => props.theme.textPrimary};
  height: 8%;
  width: 80%;
  padding: 1rem;
  margin: 2% 1rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
    height: 4rem;
    padding: 1rem;
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

const ForgetLink = styled(Link)`
  margin: 1rem 0rem;
  width: 100%;
  text-align:right;
  color: ${(props) => props.theme.primaryText}
  `;

const LogoBrand = styled.div`
  font-size: 2rem;
  height: 20%; 
  margin: 0.5rem;
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
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  `;

const In = styled.button`
  color: ${(props) => props.theme.background};
  width: 30%;
  display: flex;
  justify-content: flex-start;
  `;

const Up = styled.button`
  color: ${(props) => props.theme.background};
  width: 40%;
  display: flex;
  justify-content: flex-start;
  `;

export default SignIn;
