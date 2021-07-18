import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { signUp } from "../service/api";

function SignUp() {
  const signupInitialValues = {
    email: "",
    password: "",
  };
  const [signup, setSignup] = useState(signupInitialValues);

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const usersignUp = async () => {
    const response = await signUp(signup);
    if (response) {
      console.log("user is loggedin successfully");
    }
  };

  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <img src="assets/logo.png" alt="" />
          </Link>
        </Logo>
      </Nav>
      <BgImage />
      <SignUpContainer>
        <CT>SignUp</CT>
        <TextField
          style={{ marginTop: "20px" }}
          onChange={(e) => onInputChange(e)}
          variant="outlined"
          name="email"
          label="Enter Email"
        />
        <br />
        <TextField
          style={{ marginTop: "20px" }}
          onChange={(e) => onInputChange(e)}
          variant="outlined"
          name="password"
          label="Enter Password"
        />
        <br />
        <Link to="/home">
          <Button onClick={usersignUp} style={{ marginTop: "20px" }}>
            SignUp
          </Button>
        </Link>
        <Form>
          <CheckBox style={{ color: "black" }}>
            <input type="checkbox" />
            <label style={{ marginLeft: "10px" }}>Remember me</label>
            <br />
          </CheckBox>
          <Help style={{ color: "black", marginLeft: "110px" }}>
            Need help?
          </Help>
        </Form>
        <SignInContainer style={{ color: "black" }}>
          <SignInText>Already have an account</SignInText>
          <SignInLink>
            <Link to="/signin" style={{ color: "black" }}>
              SignIn Now
            </Link>
          </SignInLink>
        </SignInContainer>
        <CT1 style={{ color: "black" }}>
          This page is protected by Google reCAPTCHA to <br />
          ensure you're not a bot.{" "}
          <Link to="/">
            <u style={{ color: "black" }}>Learn more.</u>
          </Link>
        </CT1>
      </SignUpContainer>
    </Container>
  );
}

const Container = styled.section`
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 150px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/assets/background-img.jpg");
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
  left: 0;
  z-index: -1;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 40px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 180px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  color: white;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const SignUpContainer = styled.div`
  margin: auto;
  width: 30%;
  border: 3px solid black;
  background-color: white;
  padding: 10px;
`;

const CT = styled.h1`
  font-size: 30px;
  margin-right: 300px;
  color: black;
  margin-left: 40px;
`;

const Button = styled.button`
  margin-top: 50px;
  color: #fff;
  background-color: red;
  border: 1px solid red;
  width: 270px;
  padding: 15px;
  font-size: 20px;
  margin-right: 10px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 10px;
  font-size: 15px;
`;

const CheckBox = styled.div`
  margin-left: 50px;
`;

const Help = styled.a`
  margin-left: 65px;
  margin-top: 2px;
`;

const SignInContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 22px;
`;

const SignInText = styled.h3`
  margin-left: 20px;
  font-weight: 100;
  color: grey;
`;

const SignInLink = styled.a`
  margin: auto;
  margin-left: 20px;
  color: black;
`;

const CT1 = styled.div`
  font-size: 13px;
  text-align: left;
  margin-left: 50px;
  margin-bottom: 150px;
`;

export default SignUp;
