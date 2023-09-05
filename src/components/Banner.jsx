import React from "react";
import { Container, Image } from "react-bootstrap";
import "./style.css";

function Banner() {
  return (
    <>
      <Container className="main">
        <Container className="main-content">
          <Image
            className="avatar"
            src="https://avatars.githubusercontent.com/u/47388359?v=4"
          />
          <h2 style={{ color: `#ffffff` }}>Lohith (@thagoo)</h2>
          <h5 style={{ color: `#777777` }}>
            Self-taught Webdeveloper, Student
          </h5>
        </Container>
      </Container>
    </>
  );
}

export default Banner;
