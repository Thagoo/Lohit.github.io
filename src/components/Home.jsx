import React from "react";
import { Container, Image } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import "./style.css";
import Banner from "./Banner";

function Home() {
  return (
    <>
      <Container className="main">
        <NavbarHeader />
        <Banner />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
