import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import {auth,provider} from '../firebase'

function Header() {
  /*useEffect((user) => {
    console.log(user);
    history.push('/home')
  }, [])

  const handleAuth = () => {
    auth.signInWithPopup(provider)
  }*/

  return (
    <Nav>
      <Logo>
        <img src="assets/logo.png" alt="" />
      </Logo>
      <DropdownContainer>
        <DropDown>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </DropDown>
        <SignIn>
          <Link to="/home">SignIn</Link>
        </SignIn>
      </DropdownContainer>
    </Nav>
  );
}

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

const DropdownContainer = styled.div``;

const DropDown = styled.select`
  border: 1px solid white;
  padding: 10px;
  font-size: 15px;
  background: black;
  color: #fff;
`;

const SignIn = styled.button`
  padding: 10px;
  border: 1px solid red;
  color: #fff;
  margin-left: 20px;
  font-size: 15px;
  border-raduis: 15px;
  background: red;
`;

export default Header;

/**/
