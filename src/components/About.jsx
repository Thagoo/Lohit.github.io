import React from "react";
import NavbarHeader from "./NavbarHeader";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

function About() {
  return (
    <Container className="main">
      <NavbarHeader />
      <Container>
        <div className="about-content">
          <h1>
            About Me <br />
          </h1>
          <hr />
          <h5>I am Lohith</h5>
          <ul>
            <li>Software Enthusiast</li>
            <li>Developer</li>
          </ul>
          <h5>You might know me from </h5>
          <ul>
            <li>Android Custom Rom and kernel such as Triton kernel</li>
            <li>MSM8937 Developement Communinty</li>
          </ul>
          <h5>Language </h5>
          <ul>
            <li>
              My mother tongue is Kannada, I am fluent in English and I can
              understand Hindi
            </li>
          </ul>
          <h5>Thagoo</h5>
          <p>
            You might see Thagoo as my username in most of the forums, a fancy
            username I set for the attention when I was kid. Little did I know,
            this choice will become an integral part of my online presence.
          </p>
          <p>BTW, I use Arch.</p>
          <hr />
          <Footer />
        </div>
      </Container>
    </Container>
  );
}

export default About;
