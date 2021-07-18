import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ArrowRightOutlined from "@ant-design/icons";

function Login() {
  return (
    <Container>
      <Header />
      <Content>
        <BgImage />
        <CT>
          Unlimited movies, TV
          <div>shows and more.</div>
        </CT>
        <CT1>Watch anywhere. Cancel anytime.</CT1>
        <CT2>
          Ready to watch? Enter your email to create or restart your membership.
        </CT2>
        <InputContainer>
          <Input placeholder="Email Address" />
          <S1>
            Get Started <ArrowRightOutlined />
          </S1>
        </InputContainer>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 5vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
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

const CT = styled.h1`
  font-size: 70px;
`;

const CT1 = styled.h2`
  font-size: 25px;
  margin-top: 5px;
  font-weight: 200;
`;

const CT2 = styled.h2`
  font-size: 20px;
  margin-top: 15px;
  font-weight: 200;
`;

const InputContainer = styled.div`
display:flex;
margin-top:15px;
width:60%;
align-content:center;
align-items;center;
justify-content:center;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 20px;
  width: 50%;
`;

const S1 = styled.button`
  border: 1px solid red;
  background: red;
  width: 30%;
  font-size: 30px;
  color: #fff;
`;

export default Login;
