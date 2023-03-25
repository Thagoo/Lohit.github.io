import React from "react";
import { Container, Image } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import "./style.css";

function Home() {
  return (
    <>
      <Container className="main">
        <NavbarHeader />
        <Container className="main-content">
          <Image className="avatar" src="images/lohith.png" />
          <h2 style={{ color: `#ffffff` }}>Lohith (@thagoo)</h2>
          <h5 style={{ color: `#777777` }}>
            Self-taught Webdeveloper, Student
          </h5>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
