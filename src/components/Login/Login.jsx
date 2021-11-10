import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import { requestLogin, requestSignUp } from '../../actions/user';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const errorsObj = { username: '', email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [isActive, setActive] = useState(false);

  const dispatch = useDispatch();

  const toggleClass = () => {
    setActive(!isActive);
  };

  function onSignIn(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if (password === '') {
      errorObj.email = 'Password is Required';
      error = true;
    }

    if (identifier === '') {
      errorObj.email = 'Identifier is Required';
      error = true;
    }

    setErrors(errorObj);

    if (error) return;

    dispatch(requestLogin(identifier, password));
  }

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
      <Body className={isActive ? 'active' : null}>
        <Brand>
          <BrandTitle>Colorize</BrandTitle>
        </Brand>
        <Container>
          <BlueBg>
            <SignIn>
              <BlueBgTitles className="titleSignin">Already Have an Account ?</BlueBgTitles>
              <LoginBtn to="/Login" onClick={toggleClass}>
                <Href to="/Login">
                  <Span>Sign In</Span>
                  <Span>Sign In</Span>
                </Href>
              </LoginBtn>
            </SignIn>
            <SignUp>
              <BlueBgTitles className="titleSignup">Don't Have an Account ?</BlueBgTitles>
              <LoginBtn to="/Login" onClick={toggleClass}>
                <Href to="/Login">
                  <Span>Sign Up</Span>
                  <Span>Sign Up</Span>
                </Href>
              </LoginBtn>
            </SignUp>
          </BlueBg>
          <FormBx className={isActive ? 'active' : null}>
            <SignInForm className={isActive ? 'active' : null}>
              <Form onSubmit={onSignIn}>
                <FormBxTitles>Sign In</FormBxTitles>
                <Input placeholder="Username" type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <LogPass>
                  <ButtonPush>
                    <HrefPush to="/">
                      <SpanPush>Login</SpanPush>
                      <SpanPush>Login</SpanPush>
                    </HrefPush>
                  </ButtonPush>
                  <Forgot to="/forgetPass">Forgot Password</Forgot>
                </LogPass>
              </Form>
            </SignInForm>

            <SignUpForm className={isActive ? 'active' : null}>
              <Form onSubmit={onSignUp}>
                <FormBxTitles>Sign Up</FormBxTitles>
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} />
                <ButtonPush>
                  <HrefPush to="/home">
                    <SpanPush>Register</SpanPush>
                    <SpanPush>Register</SpanPush>
                  </HrefPush>
                </ButtonPush>
              </Form>
            </SignUpForm>
          </FormBx>
        </Container>
      </Body>
    </Wrapper>

  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: ${(props) => props.theme.primaryText};
  transition: 0.5s;

  &.active {
    background: ${(props) => props.theme.secondaryText};
  }
`;

const Brand = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const BrandTitle = styled.p`
  font-size: 3rem;
  color: ${(props) => props.theme.background};


  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1200px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    max-width: 450px;                            
    height: 800px;                              
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BlueBg = styled.div`
  position: absolute;
  top: 40px;
  width: 88%;                                     
  height: 620px;                                  
  display: flex;
  justify-content: center;
  align-items: center;    
  background: rgba(255,255,255,0.2);
  box-shadow: 0 5px 45px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    top: 0;
    height: 740px;                                
    width: 95%;                                   
  }
`;

const box = `
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;

const SignIn = styled.div`
  ${box};
  @media (max-width: 768px) {
  top: 0;
  height: 140px;
}

`;

const SignUp = styled.div`
  ${box};
  @media (max-width: 768px) {
    padding: 30px;
    height: 190px;
  }
`;

const BlueBgTitles = styled.h2`
  color: ${(props) => props.theme.background};
  font-size: 1.8em;
  font-weight: 400;
  margin-bottom: 75px;

  @media (max-width: 768px) {
    font-size: 1.3em;
    margin-bottom: 15px;
  }

  &.titleSignup {
    padding-top: 30px;
  }

  &.titleSignin {
    padding-top: 30px;
  }
`;

const LoginBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Href = styled(Link)`
  position: relative;
  width: 150px;
  height: 55px;
  text-align: center;
  line-height: 55px;
  margin: 10px;
  text-transform: uppercase;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 2px;
  overflow: hidden;

  &:hover {
    transition: 0.4s ease-in;
    color: ${(props) => props.theme.background}
  }
  &:before
  {
    content: " ";
    position: absolute;
    bottom: -250px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 250px;
    background: ${(props) => props.theme.textPrimary};
    border-radius: 50%;
    transition: 0.4s ease-in;
  }

  &:hover:before {
    bottom: -150px;
  }
`;

const Span = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0s ease-in;
`;

const FormBx = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 95%;
  background: ${(props) => props.theme.background};

  z-index: 14;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0,0,0,0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;

  &.active {
    left: 50%;                                           
  }

  @media all and (max-width: 768px) {
    width: 100%;
    height: 575px;                                        
    top: 0;
    box-shadow: none;

    &.active {
      left: 0;
      top: 170px;
    }
  }
`;

const form = `
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
`;

const SignInForm = styled.div`
  ${form}; 
  transition-delay: 0.25s;

  &.active {
    left: -100%;
    transition-delay: 0s;
  }
`;

const SignUpForm = styled.div`
  ${form};

  left: 100%;
  transition-delay: 0s;

  &.active {
    left: 0;
    transition-delay: 0.25s;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormBxTitles = styled.h3`
  font-size: 1.8em;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 80px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;

  @media all and (max-width: 768px) {
    top: 10px;
  }
`;

const inputSubmit = `
  background: ${(props) => props.theme.primaryText} !important;
  border: none;
  // color: ${(props) => props.theme.background};
  max-width: 100px;
  cursor: pointer;

  &.active {
    // background: ${(props) => props.theme.primaryText};
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  padding: 15px;
  outline: none;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.textPrimary};
  ;

  &.submit {
    ${inputSubmit};
  }
`;

const LogPass = styled.div`
  display: flex;
`;

const ButtonPush = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  `;

const HrefPush = styled(Link)`
  position: relative;
  width: 120px;
  height: 55px;
  text-align: center;
  line-height: 55px;;
  text-transform: uppercase;
  background: ${(props) => props.theme.textPrimary};
  color: ${(props) => props.theme.background};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 2px;
  overflow: hidden;

  &:hover {
    transition: 0.4s ease-in;
    color: ${(props) => props.theme.textPrimary}
  }

  &:before
  {
    content: " ";
    position: absolute;
    bottom: -250px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 250px;
    background: ${(props) => props.theme.primaryText};
    border-radius: 50%;
    transition: 0.4s ease-in;
  }

  &:hover:before {
    bottom: -150px;
  }
`;

const SpanPush = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0s ease-in;
`;

const Forgot = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  margin-left: 45%;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 79px;
  }
`;

export default Login;
