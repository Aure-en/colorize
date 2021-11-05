import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import { requestLogin, requestSignUp } from '../../actions/user';

const SignInTest = () => {
  const [identifier, setIdentifier] = useState('');
  const errorsObj = { username: '', email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirm] = useState('');

  const dispatch = useDispatch();

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

    <Body>
      <Brand>
        <BrandImg src="logo.svg" alt="logo" />
        <BrandTitle>Colorize</BrandTitle>
      </Brand>
      <Container>
        <BlueBg>
          <SignIn>
            <BlueBgTitles>Already Have an Account ?</BlueBgTitles>
            <SignInBtn to="/signin">
              <Svg><Rect /></Svg>
              Sign In
            </SignInBtn>
          </SignIn>
          <SignUp>
            <BlueBgTitles>Don't Have an Account</BlueBgTitles>
            <SignUpBtn to="/signup">
              <Svg><Rect /></Svg>
              Sign Up
            </SignUpBtn>
          </SignUp>
        </BlueBg>
        <FormBx>
          <SignInForm>
            <Form onSubmit={onSignIn}>
              <FormBxTitles>Sign In</FormBxTitles>
              <Input placeholder="Username" type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <LogPass>
                <Input className="submit" type="submit" value="Login" />
                <Forgot to="/forgetPass">Forgot Password</Forgot>
              </LogPass>
            </Form>
          </SignInForm>

          <SignUpForm>
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
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #03a9f4;
  transition: 0.5s;

  &:active {
    background: #f43648;
  }
`;

const Brand = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.5rem;
`;

const BrandImg = styled.img`
  width: 25%;
  margin-right: 3rem;
`;

const BrandTitle = styled.p`
  width: 70%;
  font-size: 3rem;
`;

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;

  @media all and (max-width: 768px) {
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BlueBg = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;    
  background: rgba(255,255,255,0.2);
  box-shadow: 0 5px 45px rgba(0,0,0,0.15);

  @media all and (max-width: 768px) {
    top: 0;
    height: 100%;
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

  @media all and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }
`;

const SignIn = styled.div`
${box};

@media all and (max-width: 768px) {
  top: 0;
}

`;

const SignUp = styled.div`
${box};
margin-top: 10px;
`;

const FormBx = styled.div`
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100%;
background: #fff;
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 5px 45px rgba(0,0,0,0.25);
transition: 0.5s ease-in-out;
overflow: hidden;

&:active {
  left: 50%;

@media all and (max-width: 768px) {
  width: 100%;
  height: 500px;
  top: 0;
  box-shadow: none;

  &:active {
    left: 0;
    top: 150px;
  }
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
&:active {
  left: -100%;
  transition-delay: 0s;
}
`;

const SignUpForm = styled.div`
${form};
left: 100%;
transition-delay: 0s;
&:active {
  left: 0;
  transition-delay: 0.25s;
}
`;

const BlueBgTitles = styled.h2`
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 60px;
`;

const link = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 60px;
  font-family: sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
`;

const SignInBtn = styled(Link)`
${link};
margin-top: 20px;
`;

const SignUpBtn = styled(Link)`
${link};
margin-top: 20px;
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

stroke: #fff;
stroke-width: 4;
transition: 1s;
stroke-dasharray: 500,500;
stroke-dashoffset: 0;

&:hover {
  stroke-dasharray: 100,290;
  stroke-dashoffset: 220;
  stroke: #fff;
}
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormBxTitles = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
`;
const inputSubmit = `
background: #03a9f4;
border: none;
color: #fff;
max-width: 100px;
cursor: pointer;

&:active {
  background: #f43648;
}
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #333;

  &.submit {
    ${inputSubmit};
  }
`;

const LogPass = styled.div`

`;

const Forgot = styled(Link)`
color: #333;
margin-left: 40px;
font-weight: 300;
`;

export default SignInTest;
