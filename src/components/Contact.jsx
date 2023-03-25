import React from "react";
import { Container, Nav } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";

function Contact() {
  return (
    <Container className="main" fluid>
      <NavbarHeader />
      <Container>
        <div className="contact-content">
          <h1>Contact Me</h1>
          <hr />
          <p>
            I would be happy to write back if you’d like to send me an
            <a href="mailto:lohitgowda56@gmail.com"> Email</a>
          </p>
          <p>
            For any other small communication that can be sorted by IM, feel
            free to look over here for your preferred IM choice. If you are
            trying to contact me with IM, please ensure your message conveys
            your information concisely and readably, rather than sending a dumb
            hi/hello and expecting me to respond on it.
          </p>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}

export default Contact;
