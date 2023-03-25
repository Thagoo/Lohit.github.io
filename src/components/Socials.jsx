import React from "react";
import { Image, Container } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";

function Socials() {
  return (
    <Container className="main" fluid>
      <NavbarHeader />
      <Container className="socials-content">
        <Image className="avatar" src="lohith.png" />
        <h2 style={{ color: `#ffffff` }}>Lohith (@thagoo)</h2>
        <hr />
        <a
          className="btn-socials btn-socials-email"
          href="mailto:lohitgowda56@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="email.svg" alt="Email Logo"></img>
          lohitgowda56@gmail
        </a>
        <a
          className="btn-socials btn-socials-telegram"
          href="https://t.me/thagoo"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="telegram.svg" alt="Telegram Logo"></img>
          Telegram
        </a>
        <a
          className="btn-socials btn-socials-discord"
          href="https://discord.com/users/thago#3372"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="discord.svg" alt="Discord Logo"></img>
          Discord
        </a>
        <a
          className="btn-socials btn-socials-reddit"
          href="https://www.reddit.com/user/No_Dig6944"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="reddit.svg" alt="Reddit Logo"></img>
          Reddit
        </a>
        <a
          className="btn-socials btn-socials-twitter"
          href="https://twitter.com/l_ohit"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="twitter.svg" alt="Twitter Logo"></img>
          Twitter
        </a>
        <a
          className="btn-socials btn-socials-instagram"
          href="https://instagram.com/l_0hit"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="instagram.svg" alt="Instagram Logo"></img>
          Instagram
        </a>
        <a
          className="btn-socials btn-socials-github"
          href="https://github.com/thagoo"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="github.svg" alt="Github Logo"></img>
          Github
        </a>
        <a
          className="btn-socials btn-socials-xda"
          href="    https://forum.xda-developers.com/m/thago.9770731/"
          target="_blank"
          rel="noopener"
        >
          <img class="icon-xda" src="xda-white-text.webp" alt="XDA Logo"></img>
        </a>
      </Container>
      <Footer />
    </Container>
  );
}

export default Socials;
