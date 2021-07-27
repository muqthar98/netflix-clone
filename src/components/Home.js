import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import requests from "../axios/requests";
import Row from "./Row";
import Banner from "./Banner";

function Home() {
  /*const handleAuth = () => {
    auth
    .signOut()
    history.push('/');
    console.log(handleAuth)
  }*/

  return (
    <Container>
      <Nav>
        <Logo>
          <img src="assets/logo.png" alt="" />
        </Logo>
        <NavMenu>
          <Link>TV Shows</a>
          <Link style={{ marginLeft: "50px" }}>Movies</Link>
          <Link style={{ marginLeft: "50px" }}>Recently Added</Link>
          <Link style={{ marginLeft: "50px" }}>My List</Link>
        </NavMenu>
        <Signout>
          <Link to="/">SignOut</Link>
        </Signout>
      </Nav>
      <Banner />
      <Row
        title="NetFlix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomancemovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />`
    </Container>
  );
}

const Container = styled.div``;

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

const NavMenu = styled.nav`
  justify-content: space-between;
`;

const Signout = styled.button`
  padding: 10px;
  border: 1px solid red;
  color: #fff;
  margin-left: 20px;
  font-size: 15px;
  border-raduis: 15px;
  background: red;
`;

export default Home;
