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
              <SignInBtn to="/Login" onClick={toggleClass}>
                <Svg><Rect /></Svg>
                Sign In
              </SignInBtn>
            </SignIn>
            <SignUp>
              <BlueBgTitles className="titleSignup">Don't Have an Account ?</BlueBgTitles>
              <SignUpBtn to="/Login" onClick={toggleClass}>
                <Svg><Rect /></Svg>
                Sign Up
              </SignUpBtn>
            </SignUp>
          </BlueBg>
          <FormBx className={isActive ? 'active' : null}>
            <SignInForm className={isActive ? 'active' : null}>
              <Form onSubmit={onSignIn}>
                <FormBxTitles>Sign In</FormBxTitles>
                <Input placeholder="Username" type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <LogPass>
                  <Input to="/home" className="submit" type="submit" value="Login" />
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
                <Input className="submit" type="submit" value="Register" />
              </Form>
            </SignUpForm>
          </FormBx>
        </Container>
      </Body>
    </Wrapper>

  );
};

/* ******************************************** Container - fenetre principale **************************************** */

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
  min-height: 100%;                             /* taille de la fenetre minimum */
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
    margin-bottom: 2rem;                          /* espace entre la box et le titre et la marque */
  }
`;

const BrandTitle = styled.p`
  font-size: 3rem;
  color: ${(props) => props.theme.background};


  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1200px;
  height: 700px;                                  /* hauteur de la fenetre transparente bureau */
  margin: 40px;

  @media all and (max-width: 768px) {
    max-width: 450px;                             /* largeur de la fenetre transparente mobile */
    height: 800px;                                /* hauteur de la fenetre transparente mobile */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

/* ******************************************** BlueBg - fenetre transparente **************************************** */

const BlueBg = styled.div`
  position: absolute;
  top: 40px;
  width: 90%;                                      /* largeur de la fenetre transparente bureau */
  height: 620px;                                   /* hauteur de la fenetre transparente bureau */
  display: flex;
  justify-content: center;
  align-items: center;    
  background: rgba(255,255,255,0.2);
  box-shadow: 0 5px 45px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    top: 0;
    height: 720px;                                  /* hauteur de la fenetre transparente mobile */
    width: 90%;                                     /* Largeur de la fenetre transparente mobile */
    border-radius: 3%;
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
  margin-bottom: 135px;

  @media (max-width: 768px) {
    font-size: 1.3em;
    margin-bottom: 35px;
  }

  &.titleSignup {
    padding-left: 45px;
  }

  &.titleSignin {
    padding-right: 25px;
  }
`;

const link = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;                                           /* Largeur du bouton SignUp / Signin : version bureau */
  height: 48px;                                           /* Hauteur du bouton SignUp / Signin : version bureau */
  text-align: center;
  line-height: 65px;
  font-family: sans-serif;
  font-size: 27px;                                        /* augmente la taille du texte signup */
  letter-spacing: 2px;
  color: #fff;                        color attention
  text-decoration: none;
`;

const SignInBtn = styled(Link)`
  ${link};
  margin-top: 40px;
`;

const SignUpBtn = styled(Link)`
  ${link};
  margin-top: 40px;
`;

const commonSvgRect = `
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  fill: transparent;
`;

const Svg = styled.svg`
  ${commonSvgRect};
`;

const Rect = styled.rect`
  ${commonSvgRect};

  stroke: ${(props) => props.theme.background};
  stroke-width: 4;
  transition: 1s;
  stroke-dasharray: 500,300;
  stroke-dashoffset: 0;

  &:hover {
    stroke-dasharray: 100,330;                      /* Hover (trait) du bouton SignUp / Signin */
    stroke-dashoffset: 220;
    stroke: ${(props) => props.theme.background};
  }
`;

/* ******************************************** FormBx - fenetre Blanche **************************************** */

const FormBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.background};
  border-radius: 5%; +++++++++++

  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0,0,0,0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;

  &.active {
    left: 43%;                                             /* décaler la fenetre blanche bureau */
  }

  @media all and (max-width: 768px) {
    width: 100%;
    height: 575px;                                        /* hauteur de la fenetre blanche mobile */
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
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 80px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;
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
`;

const Forgot = styled(Link)`
color: ${(props) => props.theme.secondaryText};
margin-left: 49%;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-left: 85px;
  }
`;

export default Login;
