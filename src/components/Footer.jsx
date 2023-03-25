import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Navbar expand="sm" variant="dark">
          <Nav>
            <Nav.Link href="https://github.com/Thagoo/thagoo.github.io">
              Source Code
            </Nav.Link>
            <Nav.Link as={Link} to="/socials">
              Socials
            </Nav.Link>
            <Nav.Link href="https://paypal.me/lohith56">Donate</Nav.Link>
          </Nav>
        </Navbar>
        <p style={{ color: `#737373`, fontSize: `12px` }}>© 2023 Thagoo</p>
      </Container>
    </footer>
  );
}

export default Footer;
