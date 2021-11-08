import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { requestSignUp } from '../../actions/user';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const errorsObj = { username: '', email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');

  const dispatch = useDispatch();

  function onSignUp(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if (username === '') {
      errorObj.username = 'Username is Required';
      error = true;
    }

    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    }

    if (password === '') {
      errorObj.email = 'Password is Required';
      error = true;
    }

    setErrors(errorObj);

    if (error) return;

    dispatch(requestSignUp(username, email, password));
  }
  return (
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
        <Form onSubmit={onSignUp}>
          <LoginPut type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <LoginPut type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Password type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Repeat type="password" placeholder="Repeat" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} />
          <WrapLeft>
            <Button type="submit">Submit</Button>
          </WrapLeft>
        </Form>
      </WrapperOne>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  height : 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    background: ${(props) => props.theme.background};
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
  height: 100%;
  border-radius: 10px;

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
  padding: 5px;
  padding-left: 0.5rem;
  height: 100%;
  margin-right: 0.5rem;
  border-radius: 10px;


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
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
    height: 6rem;
    padding: 1rem;
    padding-top: 2rem;
  }
`;

const Username = styled.input`
  background: ${(props) => props.theme.background};
  height: 8%;
  width: 88%;
  padding: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
    height: 4rem;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

const Email = styled.input`
  background: ${(props) => props.theme.background};
  height: 8%;
  width: 88%;
  `;

const LoginPut = styled.input`
background: ${(props) => props.theme.background};
height: 8%;
width: 85%;
padding: 1rem;
margin: 2% 1rem;

@media (max-width: 768px) {
  background-color: ${(props) => props.theme.textPrimary};
  height: 4rem;
  padding: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
    height: 4rem;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

const Password = styled.input`
  background: ${(props) => props.theme.background};
  height: 8%;
  width: 42%;
  padding: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
    height: 4rem;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const Repeat = styled.input`
  background: ${(props) => props.theme.background};
  height: 8%;
  width: 42%;
  padding: 1rem;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.textPrimary};
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
  padding-left: 1rem;
  width: 60%;
  display: flex;
  flex-direction: row;
`;

const In = styled.div`
  color: ${(props) => props.theme.background};
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;

const Up = styled.div`
  color: ${(props) => props.theme.background};
  width: 40%;
  display: flex;
  justify-content: flex-start;
`;

const Form = styled.form`

`;

export default SignUp;
