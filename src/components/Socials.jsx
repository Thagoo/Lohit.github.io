import React from "react";
import { Image, Container } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import Banner from "./Banner";

function Socials() {
  return (
    <Container className="main" fluid>
      <NavbarHeader />
      <Container className="socials-content">
        <Banner />
        <a
          className="btn-socials btn-socials-email"
          href="mailto:lohitgowda56@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/email.svg" alt="Email Logo"></img>
          lohitgowda56@gmail
        </a>
        <a
          className="btn-socials btn-socials-telegram"
          href="https://t.me/thagoo"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/telegram.svg" alt="Telegram Logo"></img>
          Telegram
        </a>
        <a
          className="btn-socials btn-socials-discord"
          href="https://discord.com/users/thago#3372"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/discord.svg" alt="Discord Logo"></img>
          Discord
        </a>
        <a
          className="btn-socials btn-socials-reddit"
          href="https://www.reddit.com/user/No_Dig6944"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/reddit.svg" alt="Reddit Logo"></img>
          Reddit
        </a>
        <a
          className="btn-socials btn-socials-twitter"
          href="https://twitter.com/l_ohit"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/twitter.svg" alt="Twitter Logo"></img>
          Twitter
        </a>
        <a
          className="btn-socials btn-socials-instagram"
          href="https://instagram.com/l_0hit"
          target="_blank"
          rel="noopener"
        >
          <img
            class="icon"
            src="images/instagram.svg"
            alt="Instagram Logo"
          ></img>
          Instagram
        </a>
        <a
          className="btn-socials btn-socials-github"
          href="https://github.com/thagoo"
          target="_blank"
          rel="noopener"
        >
          <img class="icon" src="images/github.svg" alt="Github Logo"></img>
          Github
        </a>
        <a
          className="btn-socials btn-socials-xda"
          href="    https://forum.xda-developers.com/m/thago.9770731/"
          target="_blank"
          rel="noopener"
        >
          <img
            class="icon-xda"
            src="images/xda-white-text.webp"
            alt="XDA Logo"
          ></img>
        </a>
        <a
          className="btn-socials btn-socials-linkedin"
          href="https://www.linkedin.com/in/lohith-295814233/"
          target="_blank"
          rel="noopener"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match icon"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          LinkedIn
        </a>
      </Container>
      <Footer />
    </Container>
  );
}

export default Socials;
